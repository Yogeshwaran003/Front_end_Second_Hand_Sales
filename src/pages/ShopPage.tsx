import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Get unique categories and conditions
  const categories = [...new Set(products.map(product => product.category))];
  const conditions = [...new Set(products.map(product => product.condition))];
  
  // Initialize filters from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
    
    const condition = searchParams.get('condition');
    if (condition) {
      setSelectedCondition(condition);
    }
    
    const search = searchParams.get('search');
    if (search) {
      setSearchTerm(search);
    }
    
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    if (minPrice && maxPrice) {
      setPriceRange([Number(minPrice), Number(maxPrice)]);
    }
  }, [searchParams]);
  
  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by condition
    if (selectedCondition) {
      result = result.filter(product => product.condition === selectedCondition);
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(result);
    
    // Update URL params
    const params: Record<string, string> = {};
    if (selectedCategory) params.category = selectedCategory;
    if (selectedCondition) params.condition = selectedCondition;
    if (searchTerm) params.search = searchTerm;
    params.minPrice = priceRange[0].toString();
    params.maxPrice = priceRange[1].toString();
    
    setSearchParams(params);
  }, [selectedCategory, selectedCondition, priceRange, searchTerm, setSearchParams]);
  
  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedCondition(null);
    setPriceRange([0, 3000]);
    setSearchTerm('');
    setSearchParams({});
  };
  
  return (
    <div className="container-custom mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shop Products</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-center space-x-2 btn btn-outline"
          >
            <FunnelIcon className="h-5 w-5" />
            <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
        </div>
        
        {/* Filters Sidebar */}
        <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
              <button 
                onClick={clearFilters}
                className="text-sm text-primary hover:text-primary-dark flex items-center"
              >
                <XMarkIcon className="h-4 w-4 mr-1" />
                Clear All
              </button>
            </div>
            
            {/* Search */}
            <div className="mb-6">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      type="radio"
                      id={`category-${category}`}
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                    />
                    <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                      {category}
                    </label>
                  </div>
                ))}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="category-all"
                    name="category"
                    checked={selectedCategory === null}
                    onChange={() => setSelectedCategory(null)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  />
                  <label htmlFor="category-all" className="ml-2 text-sm text-gray-700">
                    All Categories
                  </label>
                </div>
              </div>
            </div>
            
            {/* Condition */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Condition</h3>
              <div className="space-y-2">
                {conditions.map(condition => (
                  <div key={condition} className="flex items-center">
                    <input
                      type="radio"
                      id={`condition-${condition}`}
                      name="condition"
                      checked={selectedCondition === condition}
                      onChange={() => setSelectedCondition(condition)}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                    />
                    <label htmlFor={`condition-${condition}`} className="ml-2 text-sm text-gray-700">
                      {condition}
                    </label>
                  </div>
                ))}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="condition-all"
                    name="condition"
                    checked={selectedCondition === null}
                    onChange={() => setSelectedCondition(null)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  />
                  <label htmlFor="condition-all" className="ml-2 text-sm text-gray-700">
                    All Conditions
                  </label>
                </div>
              </div>
            </div>
            
            {/* Price Range */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">${priceRange[0]}</span>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  step="50"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-gray-600">${priceRange[1]}</span>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>$0</span>
                <span>$3000+</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="lg:w-3/4">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria.</p>
              <button 
                onClick={clearFilters}
                className="btn btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-4">{filteredProducts.length} products found</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
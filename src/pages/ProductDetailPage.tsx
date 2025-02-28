import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductHistory from '../components/ProductHistory';
import OwnerInfo from '../components/OwnerInfo';
import { ArrowLeftIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="container-custom mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/shop" className="btn btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };
  
  // Find related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
  
  return (
    <div className="container-custom mx-auto py-8">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-sm">
        <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to="/shop" className="text-gray-500 hover:text-primary">Shop</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link to={`/shop?category=${product.category}`} className="text-gray-500 hover:text-primary">{product.category}</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">{product.name}</span>
      </div>
      
      {/* Back Button */}
      <Link to="/shop" className="inline-flex items-center text-primary hover:text-primary-dark mb-6">
        <ArrowLeftIcon className="h-4 w-4 mr-1" />
        Back to Shop
      </Link>
      
      {/* Product Details */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="p-6">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Product Info */}
          <div className="p-6">
            <div className="mb-4">
              <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                {product.condition}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className={`h-5 w-5 ${i < Math.floor(product.currentOwner.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{product.currentOwner.rating.toFixed(1)} rating</span>
              </div>
              <p className="text-2xl font-bold text-primary mb-4">${product.price.toFixed(2)}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span className="mr-4">Category: {product.category}</span>
                <span className="mr-4">Location: {product.location}</span>
                <span>Listed: {product.listedDate}</span>
              </div>
              
              {/* Add to Cart */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-2">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="btn btn-primary flex-grow flex items-center justify-center space-x-2"
                >
                  <ShoppingCartIcon className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                
                <button className="btn btn-outline p-2">
                  <HeartIcon className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product History and Owner Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <ProductHistory history={product.history} />
        </div>
        
        <div className="space-y-6">
          <OwnerInfo owner={product.currentOwner} isOriginal={false} />
          
          {product.originalOwner.id !== product.currentOwner.id && (
            <OwnerInfo owner={product.originalOwner} isOriginal={true} />
          )}
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map(relatedProduct => (
              <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="card group">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-semibold text-gray-800">
                    {relatedProduct.condition}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{relatedProduct.name}</h3>
                    <span className="text-lg font-bold text-primary">${relatedProduct.price.toFixed(2)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
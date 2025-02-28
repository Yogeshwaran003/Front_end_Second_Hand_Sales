import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon, StarIcon } from '@heroicons/react/24/solid';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="card group">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden h-64">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-semibold text-gray-800">
            {product.condition}
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{product.name}</h3>
            <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
          </div>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-500">
              <span className="flex items-center mr-2">
                <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                {product.currentOwner.rating}
              </span>
              <span>{product.location}</span>
            </div>
            <button 
              onClick={handleAddToCart}
              className="btn btn-primary flex items-center space-x-1 text-sm py-1.5"
            >
              <ShoppingCartIcon className="h-4 w-4" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
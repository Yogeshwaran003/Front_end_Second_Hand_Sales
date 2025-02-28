import { ProductHistory as ProductHistoryType } from '../types';
import { CalendarIcon, ArrowPathIcon, UserIcon } from '@heroicons/react/24/outline';

interface ProductHistoryProps {
  history: ProductHistoryType[];
}

const ProductHistory = ({ history }: ProductHistoryProps) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Product History</h3>
      <div className="border rounded-lg overflow-hidden">
        <div className="relative">
          {history.map((item, index) => (
            <div key={item.id} className="flex mb-6 relative">
              {/* Timeline connector */}
              {index < history.length - 1 && (
                <div className="absolute left-6 top-6 w-0.5 bg-gray-300 h-full z-0"></div>
              )}
              
              {/* Event icon */}
              <div className="z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                {item.event.includes('Purchase') ? (
                  <CalendarIcon className="h-6 w-6 text-primary" />
                ) : item.event.includes('Ownership') ? (
                  <UserIcon className="h-6 w-6 text-primary" />
                ) : (
                  <ArrowPathIcon className="h-6 w-6 text-primary" />
                )}
              </div>
              
              {/* Event details */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">{item.event}</h4>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
                
                {item.previousOwner && (
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <p className="text-sm text-gray-500">Previous Owner: {item.previousOwner.name}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductHistory;
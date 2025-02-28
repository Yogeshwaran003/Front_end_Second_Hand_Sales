import { Owner } from '../types';
import { StarIcon, PhoneIcon, EnvelopeIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

interface OwnerInfoProps {
  owner: Owner;
  isOriginal: boolean;
}

const OwnerInfo = ({ owner, isOriginal }: OwnerInfoProps) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        {isOriginal ? 'Original Owner' : 'Current Seller'}
      </h3>
      
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-gray-600">{owner.name.charAt(0)}</span>
        </div>
        
        <div className="flex-1">
          <h4 className="font-medium text-gray-800">{owner.name}</h4>
          
          <div className="flex items-center mt-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                i < Math.floor(owner.rating) ? (
                  <StarIconSolid key={i} className="h-4 w-4 text-yellow-400" />
                ) : (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                )
              ))}
            </div>
            <span className="ml-1 text-sm text-gray-600">{owner.rating.toFixed(1)}</span>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center text-gray-600">
              <PhoneIcon className="h-4 w-4 mr-2" />
              <span>{owner.phone}</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <EnvelopeIcon className="h-4 w-4 mr-2" />
              <span>{owner.email}</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <CalendarIcon className="h-4 w-4 mr-2" />
              <span>Member since {owner.joinedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerInfo;
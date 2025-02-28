import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { UserIcon, CogIcon, ShoppingBagIcon, HeartIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('listings');
  
  // Mock user data
  const user = {
    id: 101,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "555-123-4567",
    rating: 4.8,
    joinedDate: "2020-03-12",
    location: "San Francisco, CA",
    bio: "Tech enthusiast and gadget lover. I take good care of my devices and only sell items that are in excellent condition."
  };
  
  // Get user's listings (products where user is the current owner)
  const userListings = products.filter(product => product.currentOwner.id === user.id);
  
  return (
    <div className="container-custom mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Profile</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{user.name.charAt(0)}</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                  <p className="text-gray-500">Member since {user.joinedDate}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveTab('listings')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'listings' ? 'bg-primary-light text-primary' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ShoppingBagIcon className="h-5 w-5" />
                  <span>My Listings</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('favorites')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'favorites' ? 'bg-primary-light text-primary' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <HeartIcon className="h-5 w-5" />
                  <span>Favorites</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'profile' ? 'bg-primary-light text-primary' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <UserIcon className="h-5 w-5" />
                  <span>Profile Info</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'settings' ? 'bg-primary-light text-primary' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <CogIcon className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* My Listings */}
          {activeTab === 'listings' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">My Listings</h2>
                <Link to="/create-listing" className="btn btn-primary">
                  Create New Listing
                </Link>
              </div>
              
              {userListings.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBagIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No Listings Yet</h3>
                  <p className="text-gray-600 mb-6">You haven't created any listings yet. Start selling your items today!</p>
                  <Link to="/create-listing" className="btn btn-primary">
                    Create Your First Listing
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {userListings.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="flex">
                        <div className="w-1/3">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-2/3 p-4">
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                          <p className="text-primary font-bold mb-2">${product.price.toFixed(2)}</p>
                          <p className="text-sm text-gray-500 mb-3">Listed on {product.listedDate}</p>
                          <div className="flex space-x-2">
                            <Link to={`/product/${product.id}`} className="btn btn-outline text-xs py-1 px-2">
                              View
                            </Link>
                            <Link to={`/edit-listing/${product.id}`} className="btn btn-outline text-xs py-1 px-2">
                              Edit
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Favorites */}
          {activeTab === 'favorites' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Favorites</h2>
              
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No Favorites Yet</h3>
                <p className="text-gray-600 mb-6">You haven't added any items to your favorites yet.</p>
                <Link to="/shop" className="btn btn-primary">
                  Browse Products
                </Link>
              </div>
            </div>
          )}
          
          {/* Profile Info */}
          {activeTab === 'profile' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Profile Information</h2>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input 
                            type="text" 
                            value={user.name}
                            readOnly
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input 
                            type="email" 
                            value={user.email}
                            readOnly
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                          <input 
                            type="tel" 
                            value={user.phone}
                            readOnly
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          <input 
                            type="text" 
                            value={user.location}
                            readOnly
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">About Me</h3>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                        <textarea 
                          value={user.bio}
                          readOnly
                          rows={5}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                        />
                      </div>
                      
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                        <input 
                          type="text" 
                          value={user.joinedDate}
                          readOnly
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                        />
                      </div>
                      
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Seller Rating</label>
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 ${i < Math.floor(user.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-2 text-gray-600">{user.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button 
                      onClick={() => setActiveTab('settings')}
                      className="btn btn-primary flex items-center"
                    >
                      Edit Profile <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Settings */}
          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Account Settings</h2>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Edit Profile</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        defaultValue={user.name}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        defaultValue={user.email}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        defaultValue={user.phone}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <input 
                        type="text" 
                        id="location"
                        defaultValue={user.location}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      <textarea 
                        id="bio"
                        defaultValue={user.bio}
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Change Password</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                      <input 
                        type="password" 
                        id="current-password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                      <input 
                        type="password" 
                        id="new-password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                      <input 
                        type="password" 
                        id="confirm-password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <button type="submit" className="btn btn-primary">
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  condition: 'Like New' | 'Good' | 'Fair' | 'Poor';
  image: string;
  history: ProductHistory[];
  originalOwner: Owner;
  currentOwner: Owner;
  location: string;
  listedDate: string;
}

export interface ProductHistory {
  id: number;
  date: string;
  event: string;
  description: string;
  previousOwner?: Owner;
}

export interface Owner {
  id: number;
  name: string;
  email: string;
  phone: string;
  rating: number;
  joinedDate: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
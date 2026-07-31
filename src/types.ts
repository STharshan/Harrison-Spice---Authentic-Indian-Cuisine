export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'curries' | 'specials' | 'biryani' | 'tandoori' | 'breads' | 'rice' | 'drinks';
  description: string;
  price: number;
  image?: string;
  isPopular?: boolean;
  spiceLevel?: 1 | 2 | 3; // 1 = Mild, 2 = Medium, 3 = Spicy
  isVegetarian?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  spicePreference?: 'Mild' | 'Medium' | 'Hot' | 'Extra Hot';
  specialInstructions?: string;
}

export interface Review {
  id: string;
  author: string;
  timeAgo: string;
  rating: number;
  comment: string;
  avatarColor?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

export interface CateringFormState {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestsCount: string;
  message: string;
}

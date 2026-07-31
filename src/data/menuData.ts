import { MenuItem } from '../types';
import { imageCdn } from './imageCdn';

export const menuItems: MenuItem[] = [
  // Signature dishes
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    category: 'Masala Special Dishes',
    description: 'Tender chicken in a rich, creamy tomato sauce infused with aromatic spices and butter.',
    price: 9.95,
    image: imageCdn.menu.butterChicken,
    isPopular: true,
    
  },
  {
    id: 'chicken-tikka-masala',
    name: 'Chicken Tikka Masala',
    category: 'Masala Special Dishes',
    description: 'Grilled chicken chunks in a spiced tomato, cream, and coconut gravy with green herbs.',
    price: 9.5,
    image: imageCdn.menu.chickenTikka,
    isPopular: true,
    
  },
  {
    id: 'lamb-rogan-josh',
    name: 'Lamb Rogan Josh',
    category: 'Rogan Josh Dishes',
    description: 'Succulent lamb slow-cooked in aromatic Kashmiri spices, garlic, ginger and caramelised onion gravy.',
    price: 10.5,
    image: imageCdn.menu.lambRogan,
    isPopular: true,
    
  },
  {
    id: 'special-biryani',
    name: 'Special Biryani',
    category: 'Biryani Dishes',
    description: 'Fragrant basmati rice slow cooked with marinated meat or vegetables, aromatic spices and saffron.',
    price: 14.95,
    image: imageCdn.menu.specialBiryani,
    isPopular: true,
    
  },
  {
    id: 'garlic-naan',
    name: 'Garlic Naan',
    category: 'Naan & Paratha',
    description: 'Soft, freshly baked Indian naan bread topped with fragrant garlic, butter, and green cilantro.',
    price: 3.5,
    image: imageCdn.menu.garlicNaan,
    isPopular: true,
    isVegetarian: true,
  },

  // Vegetarian Starter
  {
    id: 'veg-onion-bhaji',
    name: 'Onion Bhaji',
    category: 'Vegetarian Starter',
    description: '',
    price: 3.95,
    isVegetarian: true,
    
  },
  {
    id: 'veg-samosa-3pcs',
    name: 'Veg Samosa (3pcs)',
    category: 'Vegetarian Starter',
    description: '',
    price: 3.95,
    isVegetarian: true,
    
  },
  {
    id: 'garlic-mushroom-puree',
    name: 'Garlic Mushroom Puree',
    category: 'Vegetarian Starter',
    description: '',
    price: 4.95,
    isVegetarian: true,
    
  },
  {
    id: 'paneer-shashlick-starter',
    name: 'Paneer Shashlick',
    category: 'Vegetarian Starter',
    description: '',
    price: 4.5,
    isVegetarian: true,
    
  },
  {
    id: 'aloo-chat',
    name: 'Aloo Chat',
    category: 'Vegetarian Starter',
    description: '',
    price: 3.95,
    isVegetarian: true,
    
  },

  // Non Vegetarian Starter
  {
    id: 'meat-samosa-3pcs',
    name: 'Meat Samosa (3pcs)',
    category: 'Non Vegetarian Starter',
    description: '',
    price: 4.5,
    
  },
  {
    id: 'chicken-tikka-starter',
    name: 'Chicken Tikka',
    category: 'Non Vegetarian Starter',
    description: '',
    price: 4.95,
    image: imageCdn.menu.chickenTikka,
    
  },
  {
    id: 'lamb-tikka-starter',
    name: 'Lamb Tikka',
    category: 'Non Vegetarian Starter',
    description: '',
    price: 4.95,
    
  },
  {
    id: 'spicy-wings',
    name: 'Spicy Wings',
    category: 'Non Vegetarian Starter',
    description: '',
    price: 4.5,
    
  },
  {
    id: 'sheekh-kebab',
    name: 'Sheekh Kebab',
    category: 'Non Vegetarian Starter',
    description: '',
    price: 4.95,
    
  },
  {
    id: 'chicken-shashlick-starter',
    name: 'Chicken Shashlick',
    category: 'Non Vegetarian Starter',
    description: '',
    price: 4.95,
    
  },
  {
    id: 'lamb-shashlick-starter',
    name: 'Lamb Shashlick',
    category: 'Non Vegetarian Starter',
    description: '',
    price: 4.95,
    
  },
  {
    id: 'tandoori-chicken-starter',
    name: 'Tandoori Chicken',
    category: 'Non Vegetarian Starter',
    description: '',
    price: 4.95,
    
  },
  {
    id: 'chicken-manchurian',
    name: 'Chicken Manchurian',
    category: 'Non Vegetarian Starter',
    description: '',
    price: 5.5,
    
  },
  {
    id: 'chicken-chat',
    name: 'Chicken Chat',
    category: 'Non Vegetarian Starter',
    description: '',
    price: 4.5,
    
  },
  {
    id: 'mixed-kebab',
    name: 'Mixed Kebab',
    category: 'Non Vegetarian Starter',
    description: '',
    price: 5.95,
    
  },

  // Fish
  {
    id: 'tilapia-fish-tikka',
    name: 'Tilapia Fish Tikka',
    category: 'Fish',
    description: '',
    price: 5.95,
    
  },
  {
    id: 'salmon-fish-tikka',
    name: 'Salmon Fish Tikka',
    category: 'Fish',
    description: '',
    price: 6.95,
    
  },
  {
    id: 'prawn-puree',
    name: 'Prawn Puree',
    category: 'Fish',
    description: '',
    price: 5.95,
    
  },
  {
    id: 'king-prawn-puree',
    name: 'King Prawn Puree',
    category: 'Fish',
    description: '',
    price: 7.95,
    
  },
  {
    id: 'king-prawn-tandoori-fish',
    name: 'King Prawn Tandoori',
    category: 'Fish',
    description: '',
    price: 7.95,
    
  },

  // Tandoori Specialities
  {
    id: 'tandoori-chicken-tikka-dry',
    name: 'Chicken Tikka',
    category: 'Tandoori Specialities',
    description: '',
    price: 8.95,
    image: imageCdn.menu.chickenTikka,
    
  },
  {
    id: 'tandoori-lamb-tikka-dry',
    name: 'Lamb Tikka',
    category: 'Tandoori Specialities',
    description: '',
    price: 9.95,
    
  },
  {
    id: 'half-tandoori-chicken',
    name: '1/2 Tandoori Chicken',
    category: 'Tandoori Specialities',
    description: '',
    price: 9.5,
    
  },
  {
    id: 'garlic-chicken-tikka',
    name: 'Garlic Chicken Tikka',
    category: 'Tandoori Specialities',
    description: '',
    price: 9.5,
    
  },
  {
    id: 'paneer-shashlick-tandoori',
    name: 'Paneer Shashlick',
    category: 'Tandoori Specialities',
    description: '',
    price: 8.5,
    isVegetarian: true,
    
  },
  {
    id: 'chicken-shashlick-tandoori',
    name: 'Chicken Shashlick',
    category: 'Tandoori Specialities',
    description: '',
    price: 8.95,
    
  },
  {
    id: 'king-prawn-shashlick',
    name: 'King Prawn Shashlick',
    category: 'Tandoori Specialities',
    description: '',
    price: 14.95,
    
  },
  {
    id: 'king-prawn-tandoori-speciality',
    name: 'King Prawn Tandoori',
    category: 'Tandoori Specialities',
    description: '',
    price: 14.95,
    
  },

  // Balti Special Dishes
  {
    id: 'chicken-balti',
    name: 'Chicken Balti',
    category: 'Balti Special Dishes',
    description: '',
    price: 11.95,
    
  },
  {
    id: 'lamb-balti',
    name: 'Lamb Balti',
    category: 'Balti Special Dishes',
    description: '',
    price: 12.95,
    
  },
  {
    id: 'chicken-tikka-balti',
    name: 'Chicken Tikka Balti',
    category: 'Balti Special Dishes',
    description: '',
    price: 11.95,
    
  },
  {
    id: 'lamb-tikka-balti',
    name: 'Lamb Tikka Balti',
    category: 'Balti Special Dishes',
    description: '',
    price: 12.95,
    
  },
  {
    id: 'prawn-balti',
    name: 'Prawn Balti',
    category: 'Balti Special Dishes',
    description: '',
    price: 11.95,
    
  },
  {
    id: 'king-prawn-balti',
    name: 'King Prawn Balti',
    category: 'Balti Special Dishes',
    description: '',
    price: 15.95,
    
  },
  {
    id: 'mixed-vegetables-balti',
    name: 'Mixed Vegetables Balti',
    category: 'Balti Special Dishes',
    description: '',
    price: 8.95,
    isVegetarian: true,
    
  },
  {
    id: 'panner-tikka-balti',
    name: 'Panner Tikka Balti',
    category: 'Balti Special Dishes',
    description: '',
    price: 11.95,
    isVegetarian: true,
    
  },

  // Sagwala Dishes
  {
    id: 'chicken-sagwala',
    name: 'Chicken Sagwala',
    category: 'Sagwala Dishes',
    description: '',
    price: 9.5,
    
  },
  {
    id: 'lamb-sagwala',
    name: 'Lamb Sagwala',
    category: 'Sagwala Dishes',
    description: '',
    price: 9.95,
    
  },
  {
    id: 'chicken-tikka-sagwala',
    name: 'Chicken Tikka Sagwala',
    category: 'Sagwala Dishes',
    description: '',
    price: 9.5,
    
  },
  {
    id: 'prawn-sagwala',
    name: 'Prawn Sagwala',
    category: 'Sagwala Dishes',
    description: '',
    price: 9.5,
    
  },
  {
    id: 'king-prawn-sagwala',
    name: 'King Prawn Sagwala',
    category: 'Sagwala Dishes',
    description: '',
    price: 15.95,
    
  },
  {
    id: 'mixed-vegetable-sagwala',
    name: 'Mixed Vegetable Sagwala',
    category: 'Sagwala Dishes',
    description: '',
    price: 8.95,
    isVegetarian: true,
    
  },
  {
    id: 'paneer-sagwala',
    name: 'Paneer Sagwala',
    category: 'Sagwala Dishes',
    description: '',
    price: 9.5,
    isVegetarian: true,
    
  },

  // Tawa Dishes
  {
    id: 'chicken-tikka-tawa',
    name: 'Chicken Tikka Tawa',
    category: 'Tawa Dishes',
    description: '',
    price: 9.95,
    
  },
  {
    id: 'lamb-tawa',
    name: 'Lamb Tawa',
    category: 'Tawa Dishes',
    description: '',
    price: 10.5,
    
  },
  {
    id: 'prawn-tawa',
    name: 'Prawn Tawa',
    category: 'Tawa Dishes',
    description: '',
    price: 9.95,
    
  },
  {
    id: 'king-prawn-tawa',
    name: 'King Prawn Tawa',
    category: 'Tawa Dishes',
    description: '',
    price: 15.95,
    
  },
  {
    id: 'vegetable-tawa',
    name: 'Vegetable Tawa',
    category: 'Tawa Dishes',
    description: '',
    price: 8.95,
    isVegetarian: true,
    
  },
  {
    id: 'paneer-tawa',
    name: 'Paneer Tawa',
    category: 'Tawa Dishes',
    description: '',
    price: 9.95,
    isVegetarian: true,
    
  },

  // Jalfrezi Dishes
  {
    id: 'chicken-jalfrezi',
    name: 'Chicken Jalfrezi',
    category: 'Jalfrezi Dishes',
    description: '',
    price: 9.95,
    
  },
  {
    id: 'lamb-jalfrezi',
    name: 'Lamb Jalfrezi',
    category: 'Jalfrezi Dishes',
    description: '',
    price: 10.5,
    
  },
  {
    id: 'chicken-tikka-jalfrezi',
    name: 'Chicken Tikka Jalfrezi',
    category: 'Jalfrezi Dishes',
    description: '',
    price: 9.5,
    
  },
  {
    id: 'prawn-jalfrezi',
    name: 'Prawn Jalfrezi',
    category: 'Jalfrezi Dishes',
    description: '',
    price: 9.95,
    
  },
  {
    id: 'king-prawns-jalfrezi',
    name: 'King Prawns Jalfrezi',
    category: 'Jalfrezi Dishes',
    description: '',
    price: 15.95,
    
  },
  {
    id: 'mixed-vegetable-jalfrezi',
    name: 'Mixed Vegetable Jalfrezi',
    category: 'Jalfrezi Dishes',
    description: '',
    price: 8.95,
    isVegetarian: true,
    
  },
  {
    id: 'paneer-jalfrezi',
    name: 'Paneer Jalfrezi',
    category: 'Jalfrezi Dishes',
    description: '',
    price: 9.95,
    isVegetarian: true,
    
  },

  // Rogan Josh Dishes
  {
    id: 'chicken-tikka-rogan-josh',
    name: 'Chicken Tikka Rogan Josh',
    category: 'Rogan Josh Dishes',
    description: '',
    price: 9.95,
    
  },
  {
    id: 'prawn-rogan-josh',
    name: 'Prawn Rogan Josh',
    category: 'Rogan Josh Dishes',
    description: '',
    price: 9.95,
    
  },
  {
    id: 'king-prawn-rogan-josh',
    name: 'King Prawn Rogan Josh',
    category: 'Rogan Josh Dishes',
    description: '',
    price: 15.95,
    
  },
  {
    id: 'mixed-vegetables-rogan-josh',
    name: 'Mixed Vegetables Rogan Josh',
    category: 'Rogan Josh Dishes',
    description: '',
    price: 8.95,
    isVegetarian: true,
    
  },
  {
    id: 'paneer-rogan-josh',
    name: 'Paneer',
    category: 'Rogan Josh Dishes',
    description: '',
    price: 9.5,
    isVegetarian: true,
    
  },

  // Korai Dishes
  {
    id: 'chicken-tikka-korai',
    name: 'Chicken Tikka Korai',
    category: 'Korai Dishes',
    description: '',
    price: 9.95,
    
  },
  {
    id: 'lamb-korai',
    name: 'Lamb Korai',
    category: 'Korai Dishes',
    description: '',
    price: 10.5,
    
  },
  {
    id: 'prawn-korai',
    name: 'Prawn Korai',
    category: 'Korai Dishes',
    description: '',
    price: 9.95,
    
  },
  {
    id: 'king-prawn-korai',
    name: 'King Prawn Korai',
    category: 'Korai Dishes',
    description: '',
    price: 15.95,
    
  },
  {
    id: 'mixed-korai',
    name: 'Mixed Korai',
    category: 'Korai Dishes',
    description: '',
    price: 14.95,
    
  },
  {
    id: 'paneer-tikka-korai',
    name: 'Paneer Tikka Korai',
    category: 'Korai Dishes',
    description: '',
    price: 9.95,
    isVegetarian: true,
    
  },
  {
    id: 'mixed-vegetable-korai',
    name: 'Mixed Vegetable Korai',
    category: 'Korai Dishes',
    description: '',
    price: 7.95,
    isVegetarian: true,
    
  },

  // Masala Special Dishes
  {
    id: 'lamb-tikka-masala',
    name: 'Lamb Tikka Masala',
    category: 'Masala Special Dishes',
    description: '',
    price: 10.5,
    
  },
  {
    id: 'tandoori-king-prawn-masala',
    name: 'Tandoori King Prawn Masala',
    category: 'Masala Special Dishes',
    description: '',
    price: 15.95,
    
  },
  {
    id: 'tandoori-chicken-masala',
    name: 'Tandoori Chicken Masala',
    category: 'Masala Special Dishes',
    description: '',
    price: 9.95,
    
  },
  {
    id: 'butter-chicken-masala',
    name: 'Butter Chicken Masala',
    category: 'Masala Special Dishes',
    description: '',
    price: 9.95,
    image: imageCdn.menu.butterChicken,
    
  },
  {
    id: 'panner-masala',
    name: 'Panner Masala',
    category: 'Masala Special Dishes',
    description: '',
    price: 9.95,
    isVegetarian: true,
    
  },

  // Specialities Dishes
  {
    id: 'murag-chilli-masala',
    name: 'Murag Chilli Masala',
    category: 'Specialities Dishes',
    description: 'Diced chicken cooked in garam masala with green chillies, garlic and minced meat.',
    price: 10.95,
    
  },
  {
    id: 'paneer-tikka-bhuna-masala',
    name: 'Paneer Tikka Bhuna Masala (v)',
    category: 'Specialities Dishes',
    description: 'Homemade Indian cheese cooked with garam masala sauce and fresh tomatoes.',
    price: 10.95,
    isVegetarian: true,
    
  },
  {
    id: 'jhingra-chingri',
    name: 'Jhingra Chingri',
    category: 'Specialities Dishes',
    description: 'King prawns marinated in ground spices and barbequed in a clay oven.',
    price: 16.95,
    
  },
  {
    id: 'methi-gosht',
    name: 'Methi Gosht',
    category: 'Specialities Dishes',
    description: 'Chicken or lamb prepared with fresh fenugreek leaves in a spicy sauce.',
    price: 10.95,
    
  },
  {
    id: 'bringel-gosht',
    name: 'Bringel Gosht',
    category: 'Specialities Dishes',
    description: 'Lamb cooked with rich spices and fresh aubergine and mint leaves.',
    price: 10.95,
    
  },
  {
    id: 'chicken-or-lamb-naga',
    name: 'Chicken or Lamb Naga',
    category: 'Specialities Dishes',
    description: 'Chicken or lamb with onions, peppers and naga chilli. Very hot.',
    price: 10.95,
    
  },
  {
    id: 'lamb-chop-sylheti',
    name: 'Lamb Chop Sylheti',
    category: 'Specialities Dishes',
    description: 'Lamb chops with shatkora in a medium thick sauce.',
    price: 14.95,
    
  },
  {
    id: 'harrison-spice-special-medium',
    name: 'Harrison Spice Special (Medium)',
    category: 'Specialities Dishes',
    description: 'Chefs favourite mix with chicken or meat, chick peas and spinach in a special sauce.',
    price: 12.95,
    isPopular: true,
    
  },
  {
    id: 'garlic-chilli-masala-chicken',
    name: 'Garlic Chilli Masala Chicken',
    category: 'Specialities Dishes',
    description: 'Chicken cooked with garlic, chillies and masala sauce.',
    price: 10.95,
    
  },
  {
    id: 'garlic-chilli-masala-lamb',
    name: 'Garlic Chilli Masala Lamb',
    category: 'Specialities Dishes',
    description: 'Lamb cooked with garlic, chillies and masala sauce.',
    price: 11.95,
    
  },

  // Traditional Indian Dishes
  {
    id: 'madras',
    name: 'Madras',
    category: 'Traditional Indian Dishes',
    description: 'Southern Indian coastal spice and ground pepper sprinkled with curry leaves.',
    price: 7.95,
    
  },
  {
    id: 'vindaloo',
    name: 'Vindaloo',
    category: 'Traditional Indian Dishes',
    description: 'Very hot, well spiced dish with a strong flavour.',
    price: 7.95,
    
  },
  {
    id: 'curry',
    name: 'Curry',
    category: 'Traditional Indian Dishes',
    description: 'Lightly spiced traditional curry cooked in a mild sauce.',
    price: 7.95,
    
  },
  {
    id: 'bhuna',
    name: 'Bhuna',
    category: 'Traditional Indian Dishes',
    description: 'Medium cooked with onions and tomatoes, fried together for a rich consistency.',
    price: 7.95,
    
  },
  {
    id: 'dansak',
    name: 'Dansak',
    category: 'Traditional Indian Dishes',
    description: 'Sweet, sour and hot with pineapple and lentils.',
    price: 7.95,
    
  },
  {
    id: 'pasanda',
    name: 'Pasanda',
    category: 'Traditional Indian Dishes',
    description: 'Simmered in a rich creamy sauce with ground almonds.',
    price: 7.95,
    
  },
  {
    id: 'korma',
    name: 'Korma',
    category: 'Traditional Indian Dishes',
    description: 'Mild spices flavoured with cardamom, cinnamon and cream.',
    price: 7.95,
    
  },

  // Rice Dishes
  {
    id: 'boiled-rice',
    name: 'Boiled Rice',
    category: 'Rice Dishes',
    description: '',
    price: 2.95,
    isVegetarian: true,
  },
  {
    id: 'pilau-rice',
    name: 'Pilau Rice',
    category: 'Rice Dishes',
    description: '',
    price: 3.25,
    isVegetarian: true,
  },
  {
    id: 'fried-rice',
    name: 'Fried Rice',
    category: 'Rice Dishes',
    description: '',
    price: 3.8,
    isVegetarian: true,
  },
  {
    id: 'vegetable-rice',
    name: 'Vegetable Rice',
    category: 'Rice Dishes',
    description: '',
    price: 3.8,
    isVegetarian: true,
  },
  {
    id: 'mushroom-rice',
    name: 'Mushroom Rice',
    category: 'Rice Dishes',
    description: '',
    price: 3.8,
    isVegetarian: true,
  },
  {
    id: 'egg-fried-rice',
    name: 'Egg Fried Rice',
    category: 'Rice Dishes',
    description: '',
    price: 3.8,
  },
  {
    id: 'garlic-rice',
    name: 'Garlic Rice',
    category: 'Rice Dishes',
    description: '',
    price: 3.8,
    isVegetarian: true,
  },
  {
    id: 'lemon-cashew-rice',
    name: 'Lemon & Cashew Rice',
    category: 'Rice Dishes',
    description: '',
    price: 3.8,
    isVegetarian: true,
  },
  {
    id: 'keema-rice',
    name: 'Keema Rice',
    category: 'Rice Dishes',
    description: '',
    price: 3.8,
  },
  {
    id: 'jeera-rice',
    name: 'Jeera Rice (Cumin)',
    category: 'Rice Dishes',
    description: '',
    price: 3.8,
    isVegetarian: true,
  },
  {
    id: 'special-fried-rice',
    name: 'Special Fried Rice',
    category: 'Rice Dishes',
    description: '',
    price: 4.8,
  },

  // Naan & Paratha
  {
    id: 'plain-naan',
    name: 'Plain Naan',
    category: 'Naan & Paratha',
    description: '',
    price: 2.95,
    isVegetarian: true,
  },
  {
    id: 'keema-naan',
    name: 'Keema Naan (Mince Meat)',
    category: 'Naan & Paratha',
    description: '',
    price: 3.95,
  },
  {
    id: 'peshwari-naan',
    name: 'Peshwari Naan',
    category: 'Naan & Paratha',
    description: '',
    price: 3.95,
    isVegetarian: true,
  },
  {
    id: 'cheese-naan',
    name: 'Cheese Naan',
    category: 'Naan & Paratha',
    description: '',
    price: 3.5,
    isVegetarian: true,
  },
  {
    id: 'cheese-garlic-naan',
    name: 'Cheese & Garlic Naan',
    category: 'Naan & Paratha',
    description: '',
    price: 3.5,
    isVegetarian: true,
  },
  {
    id: 'cheese-tomato-naan',
    name: 'Cheese & Tomato Naan',
    category: 'Naan & Paratha',
    description: '',
    price: 3.5,
    isVegetarian: true,
  },
  {
    id: 'chicken-tikka-naan',
    name: 'Chicken Tikka Naan',
    category: 'Naan & Paratha',
    description: '',
    price: 3.95,
  },
  {
    id: 'chapati',
    name: 'Chapati',
    category: 'Naan & Paratha',
    description: '',
    price: 1.5,
    isVegetarian: true,
  },
  {
    id: 'tandoori-roti',
    name: 'Tandoori Roti',
    category: 'Naan & Paratha',
    description: '',
    price: 1.95,
    isVegetarian: true,
  },
  {
    id: 'plain-paratha',
    name: 'Plain Paratha',
    category: 'Naan & Paratha',
    description: '',
    price: 2.95,
    isVegetarian: true,
  },

  // Sundries
  {
    id: 'green-salad',
    name: 'Green Salad',
    category: 'Sundries',
    description: '',
    price: 2,
    isVegetarian: true,
  },
  {
    id: 'chips',
    name: 'Chips',
    category: 'Sundries',
    description: '',
    price: 2.95,
    isVegetarian: true,
  },
  {
    id: 'spicy-chips',
    name: 'Spicy Chips',
    category: 'Sundries',
    description: '',
    price: 3.95,
    isVegetarian: true,
  },
  {
    id: 'raitha-onion-cucumber',
    name: 'Raitha / Onion or Cucumber',
    category: 'Sundries',
    description: '',
    price: 1.5,
    isVegetarian: true,
  },
  {
    id: 'plain-popadom',
    name: 'Plain Popadom',
    category: 'Sundries',
    description: '',
    price: 0.9,
    isVegetarian: true,
  },
  {
    id: 'spicy-popadom',
    name: 'Spicy Popadom',
    category: 'Sundries',
    description: '',
    price: 1,
    isVegetarian: true,
  },
  {
    id: 'chutney-pickles-tray',
    name: 'Chutney & Pickles Tray',
    category: 'Sundries',
    description: '',
    price: 2.5,
    isVegetarian: true,
  },

  // Set Meal
  {
    id: 'set-meal-1',
    name: 'Set Meal I',
    category: 'Set Meal',
    description: 'Popadom & pickle tray, onion bhaji, chicken tikka bhuna masala, pilau rice and plain naan.',
    price: 14.95,
  },
  {
    id: 'set-meal-2',
    name: 'Set Meal 2',
    category: 'Set Meal',
    description: 'Popadom & pickle tray, onion bhaji, sheek kebab, chicken tikka masala, lamb balti, bombay aloo, pilau rice and plain naan.',
    price: 29.95,
  },
  {
    id: 'set-meal-4',
    name: 'Set Meal 4',
    category: 'Set Meal',
    description: 'Popadom & pickle tray, onion bhaji, sheek kebab, chicken tikka, meat samosa, lamb bhuna, chicken dopiaza, chicken tikka masala, lamb korai, mixed vegetables, bombay aloo, 2 pilau rice and 2 plain naan.',
    price: 59.95,
  },
];

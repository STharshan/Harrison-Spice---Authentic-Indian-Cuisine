import { MenuItem } from '../types';
import { imageCdn } from './imageCdn';

export const menuItems: MenuItem[] = [
  // Signature & Popular
  {
    id: 'm1',
    name: 'Butter Chicken',
    category: 'curries',
    description: 'Tender chicken in a rich, creamy tomato sauce infused with aromatic spices and butter.',
    price: 9.95,
    image: imageCdn.menu.butterChicken,
    isPopular: true,
   
  },
  {
    id: 'm2',
    name: 'Chicken Tikka Masala',
    category: 'curries',
    description: 'Grilled chicken chunks in a spiced tomato, cream, and coconut gravy with green herbs.',
    price: 9.50,
    image: imageCdn.menu.chickenTikka,
    isPopular: true,
   
  },
  {
    id: 'm3',
    name: 'Lamb Rogan Josh',
    category: 'curries',
    description: 'Succulent lamb slow-cooked in aromatic Kashmiri spices, garlic, ginger and caramelised onion gravy.',
    price: 10.50,
    image: imageCdn.menu.lambRogan,
    isPopular: true,
   
  },
  {
    id: 'm4',
    name: 'Special Biryani',
    category: 'biryani',
    description: 'Fragrant basmati rice slow cooked with marinated meat or vegetables, aromatic spices & saffron.',
    price: 14.95,
    image: imageCdn.menu.specialBiryani,
    isPopular: true,
   
  },
  {
    id: 'm5',
    name: 'Garlic Naan',
    category: 'breads',
    description: 'Soft, freshly baked Indian naan bread topped with fragrant garlic, butter, and green cilantro.',
    price: 3.50,
    image: imageCdn.menu.garlicNaan,
    isPopular: true,
    isVegetarian: true,
  },

  // VegetarianStarter
  {
    "id": "m6",
    "name": "Onion Bhaji (4pcs)",
    "category": "VegetarianStarter",
    "description": "",
    "price": 4.50,
    "isVegetarian": true
  },
  {
    "id": "m7",
    "name": "Onion Bhaji",
    "category": "VegetarianStarter",
    "description": "",
    "price": 3.95,
    "isVegetarian": true
  },
  {
    "id": "m8",
    "name": "Veg Samosa (3pcs)",
    "category": "VegetarianStarter",
    "description": "",
    "price": 3.95,
    "isVegetarian": true
  },
  {
    "id": "m9",
    "name": "Garlic Mushroom Puree",
    "category": "VegetarianStarter",
    "description": "",
    "price": 4.95,
    "isVegetarian": true
  },
  {
    "id": "m10",
    "name": "Paneer Shashlick",
    "category": "VegetarianStarter",
    "description": "",
    "price": 4.50,
    "isVegetarian": true
  },
  {
    "id": "m11",
    "name": "Aloo Chat",
    "category": "VegetarianStarter",
    "description": "",
    "price": 3.95,
    "isVegetarian": true
  },

  // Chef Specials
  {
    id: 'm10',
    name: 'Harrison Spice Special Karahi',
    category: 'specials',
    description: 'Chef recommendation: Tender chicken and lamb cooked together with capsicum, onions and special crushed spices.',
    price: 13.95,
    isPopular: true,
   
  },
  {
    id: 'm11',
    name: 'King Prawn Jalfrezi',
    category: 'specials',
    description: 'Jumbo king prawns tossed with green peppers, onions, tomatoes and green chillies in a thick sauce.',
    price: 14.50,
   
  },
  {
    id: 'm12',
    name: 'Paneer Makhani',
    category: 'curries',
    description: 'Cottage cheese cubes simmering in a velvety butter, tomato and cashew nut sauce.',
    price: 9.95,
    isVegetarian: true,
   
  },

  // Rice & Breads
  {
    id: 'm13',
    name: 'Pulao Rice',
    category: 'rice',
    description: 'Aromatic basmati rice cooked with whole green cardamom and cloves.',
    price: 3.50,
    isVegetarian: true,
  },
  {
    id: 'm14',
    name: 'Peshwari Naan',
    category: 'breads',
    description: 'Sweet naan stuffed with ground almonds, coconut, raisins and mango pulp.',
    price: 4.20,
    isVegetarian: true,
  },
  {
    id: 'm15',
    name: 'Plain Naan',
    category: 'breads',
    description: 'Traditional teardrop unleavened bread baked fresh in the clay tandoor.',
    price: 3.20,
    isVegetarian: true,
  },
];

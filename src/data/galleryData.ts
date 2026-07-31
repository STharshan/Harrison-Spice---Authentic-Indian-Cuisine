import { GalleryItem } from '../types';
import { imageCdn } from './imageCdn';

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Garnishing Signature Curry',
    image: imageCdn.gallery[0],
    category: 'Chef Preparation',
  },
  {
    id: 'g2',
    title: 'Tandoori Skewers Sizzling',
    image: imageCdn.gallery[1],
    category: 'Tandoori Grill',
  },
  {
    id: 'g3',
    title: 'Simmering Balti Karahi Curry',
    image: imageCdn.gallery[2],
    category: 'Authentic Curries',
  },
  {
    id: 'g4',
    title: 'Fresh Tandoori Garlic Naan',
    image: imageCdn.gallery[3],
    category: 'Fresh Breads',
  },
  {
    id: 'g5',
    title: 'Takeaway Plating & Presentation',
    image: imageCdn.gallery[4],
    category: 'Kitchen Pass',
  },
];

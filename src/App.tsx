import { useState, useEffect } from 'react';
import AOS from 'aos';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SignatureDishes } from './components/SignatureDishes';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CateringSection } from './components/CateringSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCartBadge } from './components/FloatingCartBadge';
import { OnlineMenuModal } from './components/OnlineMenuModal';
import { CartDrawer } from './components/CartDrawer';
import { ImageLightboxModal } from './components/ImageLightboxModal';

import { menuItems } from './data/menuData';
import { MenuItem, CartItem, GalleryItem } from './types';

export default function App() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.menuItem.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.menuItem.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.menuItem.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.menuItem.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartItemIds = cartItems.map((ci) => ci.menuItem.id);

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#e2e8f0] relative font-sans selection:bg-[#C5A059] selection:text-black overflow-x-hidden">
      {/* Header Bar */}
      <Header
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <Hero onOpenMenu={() => setIsMenuModalOpen(true)} />

      {/* About Section */}
      <AboutSection onOpenMenu={() => setIsMenuModalOpen(true)} />

      {/* Signature Dishes Section */}
      <SignatureDishes
        onOpenMenu={() => setIsMenuModalOpen(true)}
        onAddToCart={handleAddToCart}
        dishes={menuItems}
      />

      {/* Gallery Section */}
      <GallerySection onSelectImage={(item) => setSelectedGalleryItem(item)} />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Catering Section */}
      <CateringSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Contact & Location Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Cart & Order Badge */}
      <FloatingCartBadge cartCount={cartTotalCount} />

      {/* Interactive Online Menu Modal */}
      <OnlineMenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
        onAddToCart={handleAddToCart}
        cartItemIds={cartItemIds}
      />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Lightbox Modal for Gallery Images */}
      <ImageLightboxModal
        selectedItem={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
}

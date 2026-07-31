import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, Phone, MessageSquare, Clock } from 'lucide-react';
import { CartItem } from '../types';
import { contactInfo } from '../data/contactInfo';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'collection' | 'delivery'>('collection');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialNote, setSpecialNote] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? 2.50 : 0;
  const totalPrice = subtotal + deliveryFee;

  const handleWhatsAppCheckout = () => {
    if (!customerName || !customerPhone) {
      alert('Please fill in your name and phone number for the order.');
      return;
    }

    let itemLines = cartItems
      .map(
        (ci) =>
          `• ${ci.quantity}x ${ci.menuItem.name} (£${(ci.menuItem.price * ci.quantity).toFixed(2)})`
      )
      .join('\n');

    const msg = `New Online Order from Harrison Spice Website:
- Customer Name: ${customerName}
- Phone: ${customerPhone}
- Order Type: ${orderType.toUpperCase()} ${
      orderType === 'delivery' ? `(Address: ${deliveryAddress})` : ''
    }

Items Ordered:
${itemLines}

- Subtotal: £${subtotal.toFixed(2)}
${orderType === 'delivery' ? `- Delivery Fee: £2.50\n` : ''}- Total Price: £${totalPrice.toFixed(2)}
- Notes: ${specialNote || 'None'}

Please confirm my order & estimated collection/delivery time.`;

    const encoded = encodeURIComponent(msg);
    window.open(`${contactInfo.whatsappHref}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121212] border-l border-[#C5A059]/40 text-white flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-5 border-b border-[#C5A059]/20 bg-[#0b0b0b] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
              <h2 className="font-serif text-lg font-bold text-white">
                Your Order Basket
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full border border-gray-700 hover:border-[#C5A059] text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4 text-gray-400">
                <ShoppingBag className="w-12 h-12 mx-auto text-gray-600 stroke-1" />
                <p className="text-sm font-semibold">Your order basket is currently empty.</p>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Browse our authentic dishes and click "Add" to construct your takeaway meal.
                </p>
              </div>
            ) : (
              <>
                {/* Order Type Selector */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-black rounded-lg border border-gray-800 text-xs font-bold">
                  <button
                    onClick={() => setOrderType('collection')}
                    className={`py-2 rounded transition-all ${
                      orderType === 'collection'
                        ? 'bg-[#C5A059] text-black shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    COLLECTION (20-25 Mins)
                  </button>
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`py-2 rounded transition-all ${
                      orderType === 'delivery'
                        ? 'bg-[#C5A059] text-black shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    LOCAL DELIVERY
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3 divide-y divide-gray-800/80">
                  {cartItems.map((item) => (
                    <div key={item.menuItem.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">
                          {item.menuItem.name}
                        </h4>
                        <p className="text-[11px] text-[#C5A059] font-medium">
                          £{(item.menuItem.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-black/60 border border-gray-800 rounded px-2 py-1">
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                          className="text-gray-400 hover:text-white p-0.5"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                          className="text-gray-400 hover:text-white p-0.5"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.menuItem.id)}
                        className="text-red-400 hover:text-red-300 p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <div className="pt-4 border-t border-gray-800 space-y-3 text-xs">
                  <h4 className="font-bold text-[#C5A059] uppercase tracking-wider text-[11px]">
                    Customer Details
                  </h4>
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 bg-black border border-gray-800 rounded text-white text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                  <input
                    type="tel"
                    placeholder="Contact Phone Number *"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-black border border-gray-800 rounded text-white text-xs focus:outline-none focus:border-[#C5A059]"
                  />

                  {orderType === 'delivery' && (
                    <input
                      type="text"
                      placeholder="Delivery Address in Mountsorrel Area *"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full px-3 py-2 bg-black border border-gray-800 rounded text-white text-xs focus:outline-none focus:border-[#C5A059]"
                    />
                  )}

                  <input
                    type="text"
                    placeholder="Special instructions or spice preference (Optional)"
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    className="w-full px-3 py-2 bg-black border border-gray-800 rounded text-white text-xs focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout Totals */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-gray-800 bg-[#0b0b0b] space-y-3">
              <div className="space-y-1.5 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Local Delivery Fee</span>
                    <span>£2.50</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-sm text-white pt-2 border-t border-gray-800">
                  <span>Total Payable</span>
                  <span className="text-[#C5A059]">£{totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-gray-400 bg-black/40 p-2 rounded border border-gray-800">
                <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>Estimated ready time: {orderType === 'collection' ? '20-25 mins' : '35-45 mins'}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="py-3 px-3 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp
                </button>

                <a
                  href={contactInfo.telHref}
                  className="py-3 px-3 rounded border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call to Order
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, Phone, MessageSquare, Clock } from 'lucide-react';
import { CartItem } from '../types';
import { contactInfo } from '../data/contactInfo';
import { useFocusTrap } from '../hooks/useFocusTrap';

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
  const focusTrapRef = useFocusTrap<HTMLDivElement>({ isActive: isOpen, onEscape: onClose });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? 2.5 : 0;
  const totalPrice = subtotal + deliveryFee;

  const handleWhatsAppCheckout = () => {
    if (!customerName || !customerPhone) {
      alert('Please fill in your name and phone number for the order.');
      return;
    }

    if (orderType === 'delivery' && !deliveryAddress.trim()) {
      alert('Please add your delivery address for delivery orders.');
      return;
    }

    const itemLines = cartItems
      .map(
        (ci) =>
          `• ${ci.quantity}x ${ci.menuItem.name} (£${(ci.menuItem.price * ci.quantity).toFixed(2)})`,
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
    window.open(`${contactInfo.whatsappHref}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div
          ref={focusTrapRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-drawer-title"
          tabIndex={-1}
          className="flex w-screen max-w-md flex-col border-l border-[#C5A059]/40 bg-[#121212] text-white shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-[#C5A059]/20 bg-[#0b0b0b] p-5">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-[#C5A059]" />
              <h2 id="cart-drawer-title" className="font-serif text-lg font-bold text-white">
                Your Order Basket
              </h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-full border border-gray-700 p-2 text-gray-400 hover:border-[#C5A059] hover:text-white"
              aria-label="Close basket"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-5 overflow-y-auto p-5">
            {cartItems.length === 0 ? (
              <div className="space-y-4 py-16 text-center text-gray-400">
                <ShoppingBag className="mx-auto h-12 w-12 stroke-1 text-gray-600" />
                <p className="text-sm font-semibold">Your order basket is currently empty.</p>
                <p className="mx-auto max-w-xs text-xs text-gray-500">
                  Browse our authentic dishes and click &quot;Add&quot; to construct your takeaway meal.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-2 rounded-lg border border-gray-800 bg-black p-1 text-xs font-bold">
                  <button
                    onClick={() => setOrderType('collection')}
                    className={`rounded py-2 transition-all ${
                      orderType === 'collection'
                        ? 'bg-[#C5A059] text-black shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    COLLECTION (20-25 Mins)
                  </button>
                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`rounded py-2 transition-all ${
                      orderType === 'delivery'
                        ? 'bg-[#C5A059] text-black shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    LOCAL DELIVERY
                  </button>
                </div>

                <div className="space-y-3 divide-y divide-gray-800/80">
                  {cartItems.map((item) => (
                    <div key={item.menuItem.id} className="flex items-center justify-between gap-3 pt-3 first:pt-0">
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-xs font-bold text-white">{item.menuItem.name}</h3>
                        <p className="text-[11px] font-medium text-[#C5A059]">
                          £{(item.menuItem.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 rounded border border-gray-800 bg-black/60 px-1 py-1">
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                          className="flex h-11 w-11 items-center justify-center rounded text-gray-400 hover:bg-white/5 hover:text-white"
                          aria-label={`Decrease quantity for ${item.menuItem.name}`}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                          className="flex h-11 w-11 items-center justify-center rounded text-gray-400 hover:bg-white/5 hover:text-white"
                          aria-label={`Increase quantity for ${item.menuItem.name}`}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.menuItem.id)}
                        className="flex h-11 w-11 items-center justify-center rounded text-red-400 hover:bg-white/5 hover:text-red-300"
                        title="Remove item"
                        aria-label={`Remove ${item.menuItem.name} from basket`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t border-gray-800 pt-4 text-xs">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                      Customer Details
                    </h3>
                    <button
                      type="button"
                      onClick={onClearCart}
                      className="text-[11px] font-semibold uppercase tracking-wide text-gray-400 hover:text-white"
                    >
                      Clear basket
                    </button>
                  </div>

                  <label className="sr-only" htmlFor="customer-name">Your full name</label>
                  <input
                    id="customer-name"
                    type="text"
                    placeholder="Your Full Name *"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full rounded border border-gray-800 bg-black px-3 py-2 text-xs text-white focus:border-[#C5A059] focus:outline-none"
                  />

                  <label className="sr-only" htmlFor="customer-phone">Contact phone number</label>
                  <input
                    id="customer-phone"
                    type="tel"
                    placeholder="Contact Phone Number *"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full rounded border border-gray-800 bg-black px-3 py-2 text-xs text-white focus:border-[#C5A059] focus:outline-none"
                  />

                  {orderType === 'delivery' && (
                    <>
                      <label className="sr-only" htmlFor="delivery-address">Delivery address</label>
                      <input
                        id="delivery-address"
                        type="text"
                        placeholder="Delivery Address in Mountsorrel Area *"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="w-full rounded border border-gray-800 bg-black px-3 py-2 text-xs text-white focus:border-[#C5A059] focus:outline-none"
                      />
                    </>
                  )}

                  <label className="sr-only" htmlFor="special-note">Special instructions</label>
                  <input
                    id="special-note"
                    type="text"
                    placeholder="Special instructions or spice preference (Optional)"
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    className="w-full rounded border border-gray-800 bg-black px-3 py-2 text-xs text-white focus:border-[#C5A059] focus:outline-none"
                  />
                </div>
              </>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="space-y-3 border-t border-gray-800 bg-[#0b0b0b] p-5">
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
                <div className="flex justify-between border-t border-gray-800 pt-2 text-sm font-bold text-white">
                  <span>Total Payable</span>
                  <span className="text-[#C5A059]">£{totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded border border-gray-800 bg-black/40 p-2 text-[10px] text-gray-400">
                <Clock className="h-3.5 w-3.5 shrink-0 text-[#C5A059]" />
                <span>
                  Estimated ready time: {orderType === 'collection' ? '20-25 mins' : '35-45 mins'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="flex items-center justify-center gap-1.5 rounded bg-emerald-600 px-3 py-3 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-emerald-500"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  WhatsApp
                </button>

                <a
                  href={contactInfo.telHref}
                  className="flex items-center justify-center gap-1.5 rounded border border-[#C5A059] px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black"
                >
                  <Phone className="h-3.5 w-3.5" />
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

import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useCartStore } from "../../store/useCartStore";
import trashIcon from "../../assets/svg/trashIcon.svg";
import { formatPrice } from "../../utils/formatPrice";

const parsePrice = (price: string | number): number => {
  if (typeof price === "number") return price;

  return Number.parseInt(price.replace(/\D/g, ""), 10) || 0;
};

export function CartConfig() {
  const { items, updateQuantity, removeItem, clearCart } = useCartStore();
  const cartTotal = items.reduce(
    (total, item) => total + parsePrice(item.price) * item.quantity,
    0,
  );

  const handleCheckout = () => {
    if (items.length === 0) return;

    clearCart();
    toast.success("Checkout successful! Proceeding to payment.", {
      style: { background: "#2EC1AC", color: "#fff" },
      iconTheme: { primary: "#fff", secondary: "#2EC1AC" },
    });
  };

  return (
    <section className="w-full bg-white px-4 pb-20 pt-10 lg:px-0">
      <div className="mx-auto w-full max-w-[1240px]">
        <h1 className="mb-6 text-center font-poppins text-[28px] font-bold text-[#333333] lg:mb-10 lg:text-left lg:text-[32px]">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="mx-0 mb-16 flex flex-col items-center justify-center rounded-lg bg-[#F9F1E7] py-20">
            <p className="mb-6 font-poppins text-xl text-[#333333]">Your cart is empty</p>
            <Link
              to="/shop"
              className="rounded bg-[#B88E2F] px-10 py-3 font-poppins font-semibold text-white transition-colors hover:bg-[#A07A25]"
            >
              Return to Shop
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex w-full flex-col gap-4 lg:hidden">
              {items.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  onRemove={removeItem}
                  onUpdate={updateQuantity}
                />
              ))}
            </div>

            <div className="hidden flex-1 overflow-x-auto lg:block">
              <table className="w-full min-w-[700px] border-collapse text-left">
                <thead className="bg-[#F9F1E7] font-poppins text-[16px] font-medium text-black">
                  <tr>
                    <th className="rounded-l-lg px-4 py-4">Product</th>
                    <th className="px-4 py-4">Price</th>
                    <th className="px-4 py-4 text-center">Quantity</th>
                    <th className="px-4 py-4">Subtotal</th>
                    <th className="rounded-r-lg px-4 py-4" />
                  </tr>
                </thead>
                <tbody className="font-poppins text-[16px] text-[#9F9F9F]">
                  {items.map((item) => {
                    const subtotal = parsePrice(item.price) * item.quantity;
                    return (
                      <tr key={item.id} className="border-b border-[#F9F1E7] last:border-none">
                        <td className="flex items-center gap-4 px-4 py-6">
                          <img src={item.image} alt={item.name} className="h-[105px] w-[105px] rounded-[10px] bg-[#F9F1E7] object-cover" />
                          <span>{item.name}</span>
                        </td>
                        <td className="px-4 py-6">{item.price}</td>
                        <td className="px-4 py-6">
                          <QuantityControl item={item} onUpdate={updateQuantity} />
                        </td>
                        <td className="px-4 py-6 text-black">{formatPrice(subtotal)}</td>
                        <td className="px-4 py-6 text-center">
                          <RemoveButton onRemove={() => removeItem(item.id)} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex h-fit w-full flex-col items-center rounded-lg bg-[#F9F1E7] px-6 py-8 lg:w-[393px] lg:rounded-none lg:px-[75px] lg:pb-[80px] lg:pt-[15px]">
              <h2 className="mb-8 font-poppins text-[24px] font-semibold text-black lg:mb-[60px] lg:text-[32px]">Cart Totals</h2>
              <div className="mb-4 flex w-full items-center justify-between lg:mb-6">
                <span className="font-poppins text-[16px] font-medium text-black">Subtotal</span>
                <span className="font-poppins text-[16px] text-[#9F9F9F]">{formatPrice(cartTotal)}</span>
              </div>
              <div className="mb-8 flex w-full items-center justify-between border-b border-[#E8E8E8] pb-4 lg:mb-10 lg:border-none lg:pb-0">
                <span className="font-poppins text-[16px] font-medium text-black">Total</span>
                <span className="font-poppins text-[20px] font-medium text-[#B88E2F]">{formatPrice(cartTotal)}</span>
              </div>
              <button type="button" onClick={handleCheckout} className="w-full max-w-[222px] rounded-[15px] border border-black py-[14px] font-poppins text-[18px] text-black transition-colors hover:bg-black hover:text-white lg:text-[20px]">
                Check Out
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function QuantityControl({ item, onUpdate }: { item: { id: number; quantity: number }; onUpdate: (id: number, quantity: number) => void }) {
  return (
    <div className="mx-auto flex h-[32px] w-[108px] items-center justify-between rounded-[5px] border border-[#9F9F9F] px-3">
      <button type="button" onClick={() => onUpdate(item.id, item.quantity - 1)} className="font-medium text-black hover:text-[#B88E2F]">-</button>
      <span className="font-medium text-black">{item.quantity}</span>
      <button type="button" onClick={() => onUpdate(item.id, item.quantity + 1)} className="font-medium text-black hover:text-[#B88E2F]">+</button>
    </div>
  );
}

function RemoveButton({ onRemove }: { onRemove: () => void }) {
  return (
    <button type="button" onClick={onRemove} title="Remove item" className="transition-opacity hover:opacity-70">
      <img src={trashIcon} alt="Remove" className="h-[21.5px] w-[21px]" />
    </button>
  );
}

function CartItemCard({ item, onRemove, onUpdate }: { item: { id: number; name: string; price: string; image: string; quantity: number }; onRemove: (id: number) => void; onUpdate: (id: number, quantity: number) => void }) {
  const subtotal = parsePrice(item.price) * item.quantity;
  return (
    <div className="flex items-center gap-4 rounded-lg border border-[#F9F1E7] bg-white p-4 shadow-sm">
      <img src={item.image} alt={item.name} className="h-[80px] w-[80px] shrink-0 rounded-[10px] bg-[#F9F1E7] object-cover" />
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-start justify-between">
          <span className="pr-2 text-sm font-medium leading-tight text-[#9F9F9F]">{item.name}</span>
          <RemoveButton onRemove={() => onRemove(item.id)} />
        </div>
        <div className="text-sm text-[#333333]">{item.price}</div>
        <div className="mt-1 flex items-center justify-between">
          <QuantityControl item={item} onUpdate={onUpdate} />
          <span className="text-sm font-medium text-black">{formatPrice(subtotal)}</span>
        </div>
      </div>
    </div>
  );
}

export default CartConfig;
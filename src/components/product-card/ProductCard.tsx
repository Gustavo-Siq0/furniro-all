import { useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import { useCartStore } from "../../store/useCartStore";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    addItem(product);
    setIsAdded(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative flex cursor-pointer flex-col overflow-hidden bg-[#F4F5F7]"
    >
      <div className="relative h-[301px] w-full">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        {product.badge && (
          <div
            className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full text-sm font-medium text-white"
            style={{ backgroundColor: product.badgeColor || "transparent" }}
          >
            {product.badge}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h3 className="font-poppins text-[24px] font-semibold text-[#3A3A3A]">{product.name}</h3>
        <p className="truncate font-poppins text-[16px] font-medium text-[#898989]">{product.description}</p>
        <div className="mt-1 flex items-center gap-4">
          <span className="font-poppins text-[20px] font-semibold text-[#3A3A3A]">{product.price}</span>
          {product.oldPrice && <span className="font-poppins text-[16px] text-[#B0B0B0] line-through">{product.oldPrice}</span>}
        </div>
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#3A3A3A]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button
          type="button"
          onClick={handleAddToCart}
          className="bg-white px-10 py-3 font-semibold text-[#B88E2F] transition-colors hover:bg-[#B88E2F] hover:text-white"
        >
          {isAdded ? "Added to cart" : "Add to cart"}
        </button>
      </div>
    </Link>
  );
}

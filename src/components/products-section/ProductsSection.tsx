import { useState } from "react";
import FilterBar from "../filter-bar";
import ProductCard from "../product-card";
import type { Product } from "../../types/product";
import productImage from "../../assets/img/fundo-home.png";

interface ProductsSectionProps {
  category: string;
}

const mockProducts: Product[] = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  sku: `FURN-${String(index + 1).padStart(3, "0")}`,
  name: ["Syltherine", "Leviosa", "Lolito", "Respira"][index % 4],
  category: "living room",
  description: "Stylish cafe chair",
  price: `Rp ${(2500000 + index * 125000).toLocaleString("en-US")}`,
  oldPrice: index % 3 === 0 ? "Rp 3,500,000" : null,
  image: productImage,
  gallery: [productImage],
  colors: [],
  sizes: [],
  badge: index % 4 === 0 ? "New" : index % 3 === 0 ? "-30%" : null,
  badgeColor: index % 4 === 0 ? "#2EC1AC" : "#E97171",
  complementaryDescription: "",
  additionalInfo: "",
  rawPrice: 2500000 + index * 125000,
}));

export function ProductsSection({ category }: ProductsSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [sortBy, setSortBy] = useState("Default");

  const selectedCategory = category?.toLowerCase() || "";
  const filteredProducts = selectedCategory
    ? mockProducts.filter((product) => product.category === selectedCategory)
    : mockProducts;
  const sortedProducts = [...filteredProducts].sort((first, second) => {
    if (sortBy === "Price: Low to High") return (first.rawPrice ?? 0) - (second.rawPrice ?? 0);
    if (sortBy === "Price: High to Low") return (second.rawPrice ?? 0) - (first.rawPrice ?? 0);
    if (sortBy === "Newest") return second.id - first.id;
    return first.id - second.id;
  });
  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / itemsPerPage));
  const displayedPage = Math.min(currentPage, totalPages);
  const products = sortedProducts.slice((displayedPage - 1) * itemsPerPage, displayedPage * itemsPerPage);

  return (
    <section className="w-full bg-white">
      <FilterBar
        currentPage={displayedPage}
        itemsPerPage={itemsPerPage}
        totalItems={sortedProducts.length}
        onItemsPerPageChange={(count) => {
          setItemsPerPage(count);
          setCurrentPage(1);
        }}
        onSortChange={(value) => {
          setSortBy(value);
          setCurrentPage(1);
        }}
      />

      <div className="w-full bg-white px-4 py-10 lg:px-0">
        <div className="mx-auto w-full max-w-[1240px]">
          {products.length === 0 ? (
            <div className="py-12 text-center font-poppins text-[#898989]">Nenhum produto encontrado.</div>
          ) : (
            <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-[30px] flex items-center justify-center gap-[38px]">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    type="button"
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`flex h-[60px] w-[60px] items-center justify-center rounded-[10px] font-poppins text-[20px] transition-colors ${pageNumber === displayedPage ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white"}`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
                disabled={displayedPage >= totalPages}
                className="h-[60px] w-[98px] rounded-[10px] bg-[#F9F1E7] font-poppins text-[20px] text-black transition-colors hover:bg-[#B88E2F] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

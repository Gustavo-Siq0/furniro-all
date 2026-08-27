import { useState, type ChangeEvent } from "react";

import filterIcon from "../../assets/svg/filter.svg";
import ballsIcon from "../../assets/svg/balls.svg";
import framesIcon from "../../assets/svg/frames.svg";

interface FilterBarProps {
  currentPage?: number;
  itemsPerPage?: number;
  totalItems?: number;
  onItemsPerPageChange?: (count: number) => void;
  onSortChange?: (sortBy: string) => void;
  onFilterClick?: () => void;
  onViewChange?: (view: "grid" | "list") => void;
}

export function FilterBar({
  currentPage = 1,
  itemsPerPage = 16,
  totalItems = 32,
  onItemsPerPageChange,
  onSortChange,
  onFilterClick,
  onViewChange,
}: FilterBarProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showCount, setShowCount] = useState(itemsPerPage);
  const [sortBy, setSortBy] = useState("Default");

  const showingFrom = totalItems === 0 ? 0 : (currentPage - 1) * showCount + 1;
  const showingTo = Math.min(currentPage * showCount, totalItems);

  const handleViewChange = (mode: "grid" | "list") => {
    setViewMode(mode);
    onViewChange?.(mode);
  };

  const handleShowCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (!Number.isNaN(value) && value >= 1) {
      const sanitizedValue = Math.floor(value);
      setShowCount(sanitizedValue);
      onItemsPerPageChange?.(sanitizedValue);
    }
  };

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortBy(value);
    onSortChange?.(value);
  };

  return (
    <section className="flex min-h-[100px] w-full items-center justify-center bg-[#F9F1E7] px-3 py-4 sm:px-4 lg:px-16">
      <div className="flex w-full max-w-[1240px] flex-col items-center justify-between gap-5 lg:flex-row">
        <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:gap-5 lg:w-auto lg:justify-start">
          <button
            type="button"
            onClick={onFilterClick}
            className="flex cursor-pointer items-center gap-2 text-black transition-opacity hover:opacity-75 sm:gap-3"
          >
            <img src={filterIcon} alt="Filter" className="h-5 w-5 sm:h-6 sm:w-6 lg:h-[25px] lg:w-[25px]" />
            <span className="font-poppins text-base sm:text-lg lg:text-[20px]">Filter</span>
          </button>

          <button
            type="button"
            aria-label="Grid view"
            onClick={() => handleViewChange("grid")}
            className={viewMode === "grid" ? "opacity-100" : "opacity-50 hover:opacity-100"}
          >
            <img src={ballsIcon} alt="Grid View" className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
          </button>

          <button
            type="button"
            aria-label="List view"
            onClick={() => handleViewChange("list")}
            className={viewMode === "list" ? "opacity-100" : "opacity-50 hover:opacity-100"}
          >
            <img src={framesIcon} alt="List View" className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <div className="hidden h-8 w-[2px] bg-[#9F9F9F] sm:block" />
          <span className="text-center font-poppins text-sm sm:text-base">
            Showing {showingFrom}-{showingTo} of {totalItems} results
          </span>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-4 sm:gap-6 lg:w-auto">
          <div className="flex items-center gap-2 sm:gap-4">
            <label htmlFor="show-input" className="font-poppins text-base sm:text-lg lg:text-[20px]">Show</label>
            <input
              id="show-input"
              type="number"
              min="1"
              step="1"
              value={showCount}
              onChange={handleShowCountChange}
              className="h-12 w-12 bg-white text-center font-poppins text-base text-[#9F9F9F] focus:outline-none focus:ring-1 focus:ring-[#B88E2F] sm:h-14 sm:w-14"
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <label htmlFor="sort-select" className="whitespace-nowrap font-poppins text-base sm:text-lg lg:text-[20px]">Sort by</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={handleSortChange}
              className="h-12 w-36 bg-white px-3 font-poppins text-sm text-[#9F9F9F] focus:outline-none focus:ring-1 focus:ring-[#B88E2F] sm:h-14 sm:w-44 lg:w-[188px] lg:text-[20px]"
            >
              <option value="Default">Default</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="Newest">Newest</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

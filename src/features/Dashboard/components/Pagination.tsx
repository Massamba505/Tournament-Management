import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex justify-center items-center mt-6 gap-1">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
        // Logic to show pages around current page
        let pageToShow;
        if (totalPages <= 5) {
          pageToShow = i + 1;
        } else {
          const startPage = Math.max(
            1,
            Math.min(currentPage - 2, totalPages - 4)
          );
          pageToShow = startPage + i;
        }

        return (
          <button
            key={pageToShow}
            onClick={() => onPageChange(pageToShow)}
            className={`w-8 h-8 rounded-md text-sm ${
              currentPage === pageToShow
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {pageToShow}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;

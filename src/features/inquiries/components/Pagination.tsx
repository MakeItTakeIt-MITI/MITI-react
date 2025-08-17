import left from "../../../assets/v11/pagination-left.svg";
import right from "../../../assets/v11/pagination-right.svg";

const Pagination = ({ setPageNumber, currentPage, pages, pageLength }) => {
  return (
    <div className="flex justify-center items-center gap-5">
      <button
        type="button"
        onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        <img src={left} alt="left" />
      </button>
      <div className="flex items-center gap-1 text-xs">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => setPageNumber(page)}
            className={`p-2.5 ${
              currentPage === page ? "text-[#7FEEF0]" : "text-[#737373]"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setPageNumber((prev) => Math.min(prev + 1, pageLength))}
        disabled={currentPage === pageLength}
      >
        <img src={right} alt="right" />
      </button>
    </div>
  );
};

export default Pagination;

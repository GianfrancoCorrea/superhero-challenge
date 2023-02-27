import { useState } from "react";

function Pagination({ handlePagination, pages }) {
    const [page, setPage] = useState(1);

    const handleClick = (operation) => {
        const newPage = page + operation;
        if (newPage <= 0) return;
        setPage(newPage);
        handlePagination(newPage);
    }

    return (
        <div className="absolute w-full bottom-0 z-10 bg-slate-200/[.9] flex justify-around">
            <button
                onClick={() => { handleClick(- 1); }}
                disabled={page === 0}
                className="disabled:opacity-50 text-lg"
            >
                {`< Prev`}
            </button>
            <p className="text-lg">{page} / {pages}</p>
            <button
                onClick={() => {handleClick(+ 1); }}
                className="disabled:opacity-50 text-lg"
                disabled={page === pages}
            >
                {`Next >`}
            </button>
        </div>
    );
    
}

export default Pagination;

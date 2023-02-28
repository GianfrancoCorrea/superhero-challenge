import { useState } from 'react';
import PropTypes from 'prop-types';

function Pagination({ handlePagination, pages }) {
    const [page, setPage] = useState(1);

    const handleClick = (operation) => {
        const newPage = page + operation;
        if (newPage <= 0) { return; }
        setPage(newPage);
        handlePagination(newPage);
    };

    return (
        <div className="absolute w-full bottom-0 z-10 p-0 bg-slate-200/[.9] flex justify-around mt-2">
            <button
                onClick={() => { handleClick(-1); }}
                disabled={page === 1}
                className="disabled:opacity-50 text-lg"
                type="button"
            >
                {'< Prev'}
            </button>
            <p className="text-lg">
                {page}
                {' '}
                /
                {' '}
                {pages}
            </p>
            <button
                onClick={() => { handleClick(+1); }}
                className="disabled:opacity-50 text-lg"
                disabled={page === pages}
                type="button"
            >
                {'Next >'}
            </button>
        </div>
    );
}

export default Pagination;

Pagination.propTypes = {
    handlePagination: PropTypes.func.isRequired,
    pages: PropTypes.number.isRequired,
};

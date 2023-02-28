import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PhotoImg from './PhotoImg';
import PhotoInfo from './PhotoInfo';
import Pagination from '../Pagination';

function PhotoGrid({ superheroes }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentHeros, setCurrentHeros] = useState([]);
    const itemsPerPage = 10;
    const pages = Math.ceil(superheroes.length / itemsPerPage);

    // update page when currentPage changes due to search
    useEffect(() => {
        if (superheroes !== currentHeros) {
            setCurrentHeros(superheroes);
            setCurrentPage(1);
        }
    }, [superheroes]);

    // handle pagination by navigating to next page
    const handlePagination = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    const paginationLimit = (index) => index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage;

    return (
        <>
            <div className="photo-grid grid grid-cols-2 gap-1 text-slate-200 pb-7">
                {superheroes?.map((item, index) => (
                    paginationLimit(index) && (
                        <div
                            className="photo-content md:flex flex-col rounded-xl  m-2 text-slate-100 items-center relative"
                            key={`superhero-${item.id}`}
                        >
                            <PhotoImg
                                alt={item.name}
                                images={item.images}
                            />
                            <PhotoInfo
                                name={item.name}
                                height={item.appearance.height[1]}
                                weight={item.appearance.weight[1]}
                            />
                        </div>
                    )
                ))}
            </div>
            <Pagination
                handlePagination={handlePagination}
                pages={pages}
                currentPage={currentPage}
            />
        </>
    );
}

export default PhotoGrid;

PhotoGrid.propTypes = {
    superheroes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

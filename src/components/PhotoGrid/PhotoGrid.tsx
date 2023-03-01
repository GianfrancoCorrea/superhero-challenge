import { useEffect, useState } from 'react';
import PhotoImg from './PhotoImg';
import PhotoInfo from './PhotoInfo';
import Pagination from '../Pagination';

interface Images {
    sm: string;
    md: string;
    lg: string;
}

interface Superhero {
  id: string;
  name: string;
  images: Images;
  appearance: {
    height: string[];
    weight: string[];
  };
}

interface PhotoGridProps {
  superheroes: Superhero[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ superheroes }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentHeros, setCurrentHeros] = useState<Superhero[]>([]);
  const itemsPerPage: number = 10;
  const pages: number = Math.ceil(superheroes.length / itemsPerPage);

  // update page when currentPage changes due to search
  useEffect(() => {
    if (superheroes !== currentHeros) {
      setCurrentHeros(superheroes);
      setCurrentPage(1);
    }
  }, [superheroes]);

  // handle pagination by navigating to next page
  const handlePagination = (selectedPage: number): void => {
    setCurrentPage(selectedPage);
  };

  const paginationLimit = (index: number): boolean =>
    index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage;

  return (
    <>
      <div className="photo-grid grid grid-cols-2 gap-1 text-slate-200 pb-7">
        {superheroes?.map((item: Superhero, index: number) =>
          paginationLimit(index) && (
            <div
              className="photo-content md:flex flex-col rounded-xl  m-2 text-slate-100 items-center relative"
              key={`superhero-${item.id}`}
            >
              <PhotoImg alt={item.name} images={item.images} />
              <PhotoInfo name={item.name} height={item.appearance.height[1]} weight={item.appearance.weight[1]} />
            </div>
          )
        )}
      </div>
      <Pagination handlePagination={handlePagination} pages={pages} currentPage={currentPage} />
    </>
  );
};

export default PhotoGrid;

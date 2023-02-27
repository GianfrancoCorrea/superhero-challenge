import { useState } from "react";
import PhotoImg from "./PhotoImg";
import PhotoInfo from "./PhotoInfo";
import Pagination from "../Pagination";

function PhotoGrid({ superheros }) {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pages = Math.ceil(superheros.length / itemsPerPage);

  const handlePagination = (currentPage) => {
    setCurrentPage(currentPage);
  }

  const paginationRender = (index) => index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage;

  return (
    <>
      <div className="photo-grid grid grid-cols-2 gap-1 text-slate-200  pb-7">
          {superheros?.map((item, index) => {
              return (
                paginationRender(index) && (
                  <div className="photo-content md:flex flex-col rounded-xl  m-2 text-slate-100 items-center relative" key={`superhero-${item.id}`}>
                      <PhotoImg alt={item.name} images={item.images} />
                      <PhotoInfo item={item} />
                  </div>
                  )
              )}
          )}
      </div>
      <Pagination handlePagination={handlePagination} pages={pages} />
    </>
  )
}

export default PhotoGrid;

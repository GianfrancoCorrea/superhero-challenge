import PhotoImg from "./PhotoImg";
import PhotoInfo from "./PhotoInfo";

function PhotoGrid({ superheros }) {
  return (
    <div className="photo-grid grid grid-cols-2 gap-4 text-slate-200 ml-2 mr-2">
        {superheros?.map((item, index) => {
            return (
                <div className="md:flex flex-col rounded-xl  p-0 text-slate-100 items-center relative" key={index}>
                    <PhotoImg alt={item.name} images={item.images} />
                    <PhotoInfo item={item} />
                </div>
            )}
        )}
    </div>
  )
}

export default PhotoGrid;

function PhotoImg ({alt, images}) {
  return (
    <img src={images.sm} alt={alt} className="w-full rounded-xl shadow-sm shadow-black" />
  )
}

export default PhotoImg;

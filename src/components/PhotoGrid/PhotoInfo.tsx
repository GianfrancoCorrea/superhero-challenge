type PhotoInfoProps = {
  weight: string;
  height: string;
  name: string;
}

const PhotoInfo: React.FC<PhotoInfoProps> = ({ weight, height, name }) => {
  return (
    <div className="photo-info absolute bottom-0 text-left bg-gradient-to-b from-transparent to-slate-800 p-2 w-full rounded-b-lg">
      <h2 className="font-extrabold mb-1 drop-shadow-lg">{name}</h2>
      <div className="font-light drop-shadow-lg">
        <p>
          {' Height: '}
          {height}
        </p>
        <p>
          {' Weight: '}
          {weight}
        </p>
      </div>
    </div>
  );
};

export default PhotoInfo;

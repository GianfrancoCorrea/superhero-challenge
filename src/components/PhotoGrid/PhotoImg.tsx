import { useState } from 'react';
import LoadingPulse from './LoadingPulse';

type Images = {
  sm: string;
};

type PhotoImgProps = {
  alt: string;
  images: Images;
};

function PhotoImg({ alt, images }: PhotoImgProps): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <>
      {loaded ? null : <LoadingPulse />}
      <img
        src={images.sm}
        alt={alt}
        className="w-full rounded-xl shadow-sm shadow-black"
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

export default PhotoImg;

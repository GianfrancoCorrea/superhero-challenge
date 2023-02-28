import { useState } from 'react';
import PropTypes from 'prop-types';

function PhotoImg({ alt, images }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            { loaded ? null
                : (
                    <div className="loading-pulse border shadow rounded-lg p-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse flex space-x-4 place-content-center ">
                            <div className="rounded-full bg-slate-700 h-10 w-10" />
                        </div>
                    </div>
                )}
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

PhotoImg.propTypes = {
    alt: PropTypes.string.isRequired,
    images: PropTypes.shape({
        sm: PropTypes.string.isRequired,
    }).isRequired,
};

import { useState } from 'react';
import PropTypes from 'prop-types';
import LoadingPulse from './LoadingPulse';

function PhotoImg({ alt, images }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            { loaded ? null : <LoadingPulse /> }
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

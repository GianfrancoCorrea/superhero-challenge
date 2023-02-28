import PropTypes from 'prop-types';

function PhotoImg({ alt, images }) {
    return (
        <img
            src={images.sm}
            alt={alt}
            className="w-full rounded-xl shadow-sm shadow-black"
        />
    );
}

export default PhotoImg;

PhotoImg.propTypes = {
    alt: PropTypes.string.isRequired,
    images: PropTypes.shape({
        sm: PropTypes.string.isRequired,
    }).isRequired,
};

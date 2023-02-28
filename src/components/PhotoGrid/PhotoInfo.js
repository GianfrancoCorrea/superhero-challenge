import PropTypes from 'prop-types';

function PhotoInfo({ item }) {
    return (
        <div className="photo-info absolute bottom-0 text-left bg-gradient-to-b from-transparent to-slate-800 p-2 w-full rounded-b-lg">
            <h2 className="font-extrabold mb-1 drop-shadow-lg">{item.name}</h2>

            <div className="font-light drop-shadow-lg">
                <p>
                    {' Height: '}
                    {item.appearance.height[1]}
                </p>
                <p>
                    {' Weight: '}
                    {item.appearance.weight[1]}
                </p>
            </div>
        </div>
    );
}

export default PhotoInfo;

PhotoInfo.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        appearance: PropTypes.shape({
            height: PropTypes.arrayOf(PropTypes.string).isRequired,
            weight: PropTypes.arrayOf(PropTypes.string).isRequired,
        }).isRequired,
    }).isRequired,
};

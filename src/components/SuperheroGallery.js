
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSuperhero } from '../reducers/superhero/superheroSlice';
import PhotoGrid from './PhotoGrid/PhotoGrid';

function SuperheroGallery({ search }) {
    const dispatch = useDispatch();
    const [superheros, pending] = useSelector(({ superhero }) => [superhero.value, superhero.pending]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        dispatch(fetchSuperhero('all'));
    }, []); // eslint-disable-line

    // handle search
    useEffect(() => {
        const results = superheros.filter((superhero) => superhero.name.toLowerCase().includes(search));
        setSearchResults(results);
    }, [search, superheros]);

    return (
        pending === true
            ? <div>Loading...</div>
            : <PhotoGrid superheros={searchResults} />
    );
}

export default SuperheroGallery;

SuperheroGallery.propTypes = {
    search: PropTypes.string.isRequired,
};

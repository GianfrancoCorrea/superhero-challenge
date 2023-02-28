
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSuperhero } from '../reducers/superhero/superheroSlice';
import PhotoGrid from './PhotoGrid/PhotoGrid';

function SuperheroGallery({ search }) {
    const dispatch = useDispatch();
    const [superheroes, pending] = useSelector(({ superhero }) => [superhero.value, superhero.pending]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        dispatch(fetchSuperhero('all'));
    }, []);

    // handle search
    useEffect(() => {
        const results = superheroes.filter((superhero) => superhero.name.toLowerCase().includes(search));
        setSearchResults(results);
    }, [search, superheroes]);

    return (
        pending === true
            ? <div>Loading...</div>
            : <PhotoGrid superheroes={searchResults} />
    );
}

export default SuperheroGallery;

SuperheroGallery.propTypes = {
    search: PropTypes.string.isRequired,
};

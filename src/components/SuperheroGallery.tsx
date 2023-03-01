import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSuperhero } from '../reducers/superhero/superheroSlice';
import PhotoGrid from './PhotoGrid';

interface SuperheroGalleryProps {
  search: string;
}

function SuperheroGallery({ search }: SuperheroGalleryProps) {
    const dispatch = useDispatch<any>();
    const [superheroes, pending] = useSelector(({ superhero }) => [superhero.value, superhero.pending]);
    const [searchResults, setSearchResults] = useState<Array<any>>([]);

    useEffect(() => {
        dispatch(fetchSuperhero('all'));
    }, [dispatch]);

    // handle search
    useEffect(() => {
        const results = superheroes.filter((superhero: any) => superhero.name.toLowerCase().includes(search));
        setSearchResults(results);
    }, [search, superheroes]);

    return (
        pending === true
            ? <div>Loading...</div>
            : <PhotoGrid superheroes={searchResults} />
    );
}

export default SuperheroGallery;

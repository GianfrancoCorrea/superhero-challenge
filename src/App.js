import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSuperhero } from './reducers/superhero/superheroSlice';
import PhotoGrid from './components/PhotoGrid';
import './App.css';

function App() {

    const dispatch = useDispatch();
    const [superheros, pending] = useSelector(({ superhero }) => [superhero.value, superhero.pending]);

    useEffect(() => {
        dispatch(fetchSuperhero('all'))
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="App">
            {pending === true 
                ? <div>Loading...</div>
                : <PhotoGrid superheros={superheros} />
            }
        </div>
    );
}

export default App;

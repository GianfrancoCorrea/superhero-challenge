import { useState } from 'react';
import SuperheroGallery from './components/SuperheroGallery';
import './App.css';
import Search from './components/Search/Search';

function App() {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="App relative ">
            <Search handleSearch={handleSearch} />
            <SuperheroGallery search={search} />
        </div>
    );
}

export default App;

import { useState } from 'react';
import SuperheroGallery from './components/SuperheroGallery';
import Search from './components/Search';
import './App.css';

function App() {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="App relative">
            <Search handleSearch={handleSearch} />
            <SuperheroGallery search={search} />
        </div>
    );
}

export default App;

import SearchIcon from './SearchIcon';

type Props = {
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
};

const Search: React.FC<Props> = ({ handleSearch }) => {
  return (
    <label className="block sticky top-0 z-10">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <SearchIcon />
      </span>
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-2"
        placeholder="Search for superheroes"
        type="text"
        name="search"
        onChange={handleSearch}
      />
    </label>
  );
};

export default Search;

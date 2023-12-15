import FilterIcon from '../svgs/filter-icon';
import SearchIcon from '../svgs/search-icon';

export default function SearchBar() {
    return (
        <div className="w-full h-[52px] bg-gray-500 flex flex-row items-center px-[20px] py-[16px] rounded-md">
            <SearchIcon />
            <input
                placeholder="Search or filter results"
                className="flex-1 bg-transparent outline-none mx-[8px]"
            />
            <FilterIcon />
        </div>
    );
}

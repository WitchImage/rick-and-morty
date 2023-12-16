import FilterIcon from '../svgs/filter-icon';
import SearchIcon from '../svgs/search-icon';
import Button from '../button/button';

interface SearchBarProps {
    setShowFilters: (value: boolean) => void;
}

export default function SearchBar({ setShowFilters }: SearchBarProps) {
    return (
        <div className="w-full h-[52px] bg-gray-500 flex flex-row items-center px-[20px] py-[16px] rounded-md">
            <SearchIcon />
            <input
                placeholder="Search or filter results"
                className="flex-1 bg-transparent outline-none mx-[8px]"
            />
            <Button
                variant="unstyled"
                className="w-fit h-fit"
                onClick={() => setShowFilters(true)}
            >
                <FilterIcon />
            </Button>
        </div>
    );
}

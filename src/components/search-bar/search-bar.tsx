import FilterIcon from '../svgs/filter-icon';
import SearchIcon from '../svgs/search-icon';
import Button from '../button/button';
import { TiSortAlphabetically } from 'react-icons/ti';
import useCharacterStore from '@/store/character-store';

interface SearchBarProps {
    setShowFilters: (value: boolean) => void;
}

export default function SearchBar({ setShowFilters }: SearchBarProps) {
    const { orderBy, setOrderBy } = useCharacterStore();

    const handleOrderByButtonClick = () => {
        if (orderBy === 'none') setOrderBy('A-Z');
        else if (orderBy === 'A-Z') setOrderBy('Z-A');
        else setOrderBy('A-Z');
    };

    return (
        <div className="w-full h-[52px] bg-gray-500 flex flex-row items-center px-[20px] py-[16px] rounded-md">
            <SearchIcon />
            <input
                placeholder="Search or filter results"
                className="flex-1 bg-transparent outline-none mx-[8px]"
            />
            <Button
                variant="unstyled"
                className="p-1 rounded-md w-fit h-fit hover:bg-primary-100"
                onClick={() => setShowFilters(true)}
                aria-label="Filters"
            >
                <FilterIcon />
            </Button>
            <Button
                variant="unstyled"
                className="h-auto p-1 ml-3 rounded-md w-fit hover:bg-primary-100"
                onClick={handleOrderByButtonClick}
                aria-label="Order by alphabetically"
            >
                <TiSortAlphabetically size={25} className="fill-primary-600" />
            </Button>
        </div>
    );
}

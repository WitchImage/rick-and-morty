import type { GenderFilter } from '@/types';
import Button from '../button/button';

interface GenderFiltersProps {
    filter: GenderFilter;
    setFilter: (value: GenderFilter) => void;
}

export default function GenderFilters({
    filter,
    setFilter,
}: GenderFiltersProps) {
    return (
        <div>
            <span className="block">Gender</span>
            <div className="grid grid-cols-[repeat(3,102px)] gap-[8px] w-full">
                <Button
                    variant={filter === 'All' ? 'lightPrimary' : 'white'}
                    className="h-[44px] w-full"
                    onClick={() => setFilter('All')}
                >
                    All
                </Button>
                <Button
                    variant={filter === 'Female' ? 'lightPrimary' : 'white'}
                    className="h-[44px] w-full"
                    onClick={() => setFilter('Female')}
                >
                    Female
                </Button>
                <Button
                    variant={filter === 'Male' ? 'lightPrimary' : 'white'}
                    className="h-[44px] w-full"
                    onClick={() => setFilter('Male')}
                >
                    Male
                </Button>
                <Button
                    variant={filter === 'Genderless' ? 'lightPrimary' : 'white'}
                    className="h-[44px] w-full"
                    onClick={() => setFilter('Genderless')}
                >
                    Genderless
                </Button>
                <Button
                    variant={filter === 'Unknown' ? 'lightPrimary' : 'white'}
                    className="h-[44px] w-full"
                    onClick={() => setFilter('Unknown')}
                >
                    Unknown
                </Button>
            </div>
        </div>
    );
}

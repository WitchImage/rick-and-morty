import type { SpeciesFilter } from '@/types';
import Button from '../button/button';

interface GenderFiltersProps {
    filter: SpeciesFilter;
    setFilter: (value: SpeciesFilter) => void;
}

export default function SpeciesFilters({
    filter,
    setFilter,
}: GenderFiltersProps) {
    return (
        <div>
            <span className="block">Species</span>
            <div className="grid grid-cols-[repeat(3,102px)] gap-[8px] w-full">
                <Button
                    variant={filter === 'All' ? 'lightPrimary' : 'white'}
                    className="h-[44px] w-full"
                    onClick={() => setFilter('All')}
                >
                    All
                </Button>
                <Button
                    variant={filter === 'Human' ? 'lightPrimary' : 'white'}
                    className="h-[44px] w-full"
                    onClick={() => setFilter('Human')}
                >
                    Human
                </Button>
                <Button
                    variant={filter === 'Alien' ? 'lightPrimary' : 'white'}
                    className="h-[44px] w-full"
                    onClick={() => setFilter('Alien')}
                >
                    Alien
                </Button>
            </div>
        </div>
    );
}

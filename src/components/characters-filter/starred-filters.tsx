import type { Characterfilter } from '@/types';
import Button from '../button/button';

interface GenderFiltersProps {
    filter: Characterfilter;
    setFilter: (value: Characterfilter) => void;
}

export default function StarredFilters({
    filter,
    setFilter,
}: GenderFiltersProps) {
    return (
        <div>
            <span className="block">Character</span>
            <div className="grid grid-cols-[repeat(3,102px)] gap-[8px] w-full">
                <Button
                    variant={filter === 'All' ? 'lightPrimary' : 'white'}
                    className="h-[44px] w-full"
                    onClick={() => setFilter('All')}
                >
                    All
                </Button>
                <Button
                    variant={filter === 'Starred' ? 'lightPrimary' : 'white'}
                    className="h-[44px] w-full"
                    onClick={() => setFilter('Starred')}
                >
                    Starred
                </Button>
                <Button
                    variant={filter === 'Others' ? 'lightPrimary' : 'white'}
                    className="h-[44px] w-full"
                    onClick={() => setFilter('Others')}
                >
                    Others
                </Button>
            </div>
        </div>
    );
}

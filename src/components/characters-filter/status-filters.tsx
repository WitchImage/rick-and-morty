import type { StatusFilter } from '@/types';
import Button from '../button/button';

interface StatusFiltersProps {
    filter: StatusFilter;
    setFilter: (value: StatusFilter) => void;
}

export default function StatusFilters({
    filter,
    setFilter,
}: StatusFiltersProps) {
    return (
        <div>
            <span className="block">Status</span>
            <div className="grid grid-cols-[repeat(3,102px)] gap-[8px] w-full">
                <Button
                    variant={filter === 'All' ? 'lightPrimary' : 'white'}
                    className="h-[44px] w-full"
                    onClick={() => setFilter('All')}
                >
                    All
                </Button>
                <Button
                    variant={filter === 'Alive' ? 'lightPrimary' : 'white'}
                    className="h-[44px] w-full"
                    onClick={() => setFilter('Alive')}
                >
                    Alive
                </Button>
                <Button
                    variant={filter === 'Dead' ? 'lightPrimary' : 'white'}
                    className="h-[44px] w-full"
                    onClick={() => setFilter('Dead')}
                >
                    Dead
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

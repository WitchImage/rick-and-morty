import SearchBar from '../search-bar/search-bar';
import CharactersFilter from '../characters-filter/characters-filter';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import Button from '../button/button';
import FilterredCharactersInfo from './filterred-characters-info';
import StarredCharacters from './starred-characters';
import CharactersList from './characters-list';

interface CharactersNavbarProps {
    setShow?: (value: boolean) => void;
    className?: string;
}

export default function CharactersNavbar({
    setShow,
    className,
}: CharactersNavbarProps) {
    const [showFilters, setShowFilters] = useState<boolean>(false);

    return (
        <nav className={cn('relative h-full bg-gray-100/50', className)}>
            <section className="mt-[42px] px-[24px] mb-[25px] flex items-center gap-6">
                {setShow !== undefined && (
                    <Button
                        variant="unstyled"
                        onClick={() => setShow(false)}
                        className="flex items-center text-xl font-semibold"
                    >
                        {' '}
                        X{' '}
                    </Button>
                )}
                <span className="block text-3xl">Rick and Morty list</span>
            </section>

            <section className="relative mb-[45px]">
                <div className="mx-[23px]">
                    <SearchBar setShowFilters={setShowFilters} />
                </div>
                <CharactersFilter open={showFilters} setOpen={setShowFilters} />
            </section>

            <FilterredCharactersInfo />
            <StarredCharacters />
            <CharactersList />
        </nav>
    );
}

import useCharacterStore from '@/store/character-store';
import SearchBar from '../search-bar/search-bar';
import CharacterItem from './character-item';
import CharactersFilter from '../characters-filter/characters-filter';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import Button from '../button/button';

interface CharactersNavbarProps {
    setShow?: (value: boolean) => void;
    className?: string;
}

export default function CharactersNavbar({
    setShow,
    className,
}: CharactersNavbarProps) {
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const { characters, starredCharacters } = useCharacterStore();
    const starredCharactersLength = Object.values(starredCharacters).length;

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

            {starredCharactersLength > 0 && (
                <section className="mx-[23px]">
                    <span className="text-xs ml-[36px]">{`STARRED CHARACTERS ( ${starredCharactersLength} )`}</span>
                    <hr className="my-3" />
                    <ul className="divide-y">
                        {Object.values(starredCharacters).map((c) => (
                            <CharacterItem
                                key={c.id}
                                character={c}
                                isStarred={true}
                            />
                        ))}
                    </ul>
                </section>
            )}

            <section className="mt-[20px] mx-[23px]">
                <span className="text-xs ml-[36px]">{`CHARACTERS ( ${
                    characters.length - starredCharactersLength
                } )`}</span>
                <hr className="mt-3" />
                <ul className="divide-y">
                    {characters.map((c) => {
                        if (starredCharacters[c.id]) return;
                        return (
                            <CharacterItem
                                key={c.id}
                                character={c}
                                isStarred={false}
                            />
                        );
                    })}
                </ul>
            </section>
        </nav>
    );
}

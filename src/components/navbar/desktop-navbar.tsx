import useCharacterStore from '@/store/character-store';
import SearchBar from '../search-bar/search-bar';
import CharacterItem from './character-item';
import CharactersFilter from '../characters-filter/characters-filter';
import { useState } from 'react';

export default function DesktopNavbar() {
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const { characters, starredCharacters } = useCharacterStore();
    const starredCharactersLength = Object.values(starredCharacters).length;

    return (
        <nav className="relative h-full bg-gray-100/50">
            <span className="text-3xl block mt-[42px] px-[24px] mb-[25px]">
                Rick and Morty list
            </span>

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

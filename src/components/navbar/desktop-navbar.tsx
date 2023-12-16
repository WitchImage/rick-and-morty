import useCharacterStore from '@/store/character-store';
import SearchBar from '../search-bar/search-bar';
import CharacterItem from './character-item';

export default function DesktopNavbar() {
    const { characters, starredCharacters } = useCharacterStore();
    const starredCharactersLength = Object.values(starredCharacters).length;

    return (
        <nav className="h-full bg-gray-100/50 px-[23px]">
            <span className="text-3xl block mt-[42px] px-[24px] mb-[25px]">
                Rick and Morty list
            </span>
            <section className="mb-[45px]">
                <SearchBar />
            </section>
            {starredCharactersLength > 0 && (
                <section>
                    <span className="text-xs ml-[36px]">{`STARRED CHARACTERS ( ${starredCharactersLength} )`}</span>
                    <hr className="my-3" />
                    <ul className="divide-y">
                        {Object.values(starredCharacters).map((c) => (
                            <CharacterItem character={c} isStarred={true} />
                        ))}
                    </ul>
                </section>
            )}

            <section className="mt-[20px]">
                <span className="text-xs ml-[36px]">{`CHARACTERS ( ${
                    characters.length - starredCharactersLength
                } )`}</span>
                <hr className="mt-3" />
                <ul className="divide-y">
                    {characters.map((c) => {
                        if (starredCharacters[c.id]) return;
                        return (
                            <CharacterItem character={c} isStarred={false} />
                        );
                    })}
                </ul>
            </section>
        </nav>
    );
}

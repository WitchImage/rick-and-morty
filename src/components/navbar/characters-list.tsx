import useCharacterStore from '@/store/character-store';
import CharacterItem from './character-item';
import useFiltersStore from '@/store/filters-store';

export default function CharactersList() {
    const { characters, starredCharacters } = useCharacterStore();
    const { characterFilter } = useFiltersStore();
    const starredCharactersLength = characters.filter(
        (c) => starredCharacters[c.id] !== undefined
    ).length;

    const charactersToShow = () => {
        if (characterFilter !== 'Starred') return characters;

        return characters.filter((c) => starredCharacters[c.id] !== undefined);
    };

    return (
        <section className="mt-[20px] mx-[23px]">
            <span className="text-xs ml-[36px]">{`CHARACTERS ( ${
                characters.length - starredCharactersLength
            } )`}</span>
            <hr className="mt-3" />
            <ul className="divide-y">
                {charactersToShow().map((c) => {
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
    );
}

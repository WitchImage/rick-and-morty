import useCharacterStore from '@/store/character-store';
import CharacterItem from './character-item';
import useFiltersStore from '@/store/filters-store';

export default function StarredCharacters() {
    const { characters, starredCharacters } = useCharacterStore();
    const { characterFilter } = useFiltersStore();

    const realStarredCharacters = characters.filter(
        (c) => starredCharacters[c.id] !== undefined
    );
    const starredCharactersLength = realStarredCharacters.length;
    if (starredCharactersLength < 1 || characterFilter !== 'All') return;

    return (
        <section className="mx-[23px]">
            <span className="text-xs ml-[36px]">{`STARRED CHARACTERS ( ${starredCharactersLength} )`}</span>
            <hr className="my-3" />
            <ul className="divide-y">
                {realStarredCharacters.map((c) => (
                    <CharacterItem key={c.id} character={c} isStarred={true} />
                ))}
            </ul>
        </section>
    );
}

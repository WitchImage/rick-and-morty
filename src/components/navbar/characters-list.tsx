import useCharacterStore from '@/store/character-store';
import CharacterItem from './character-item';

export default function CharactersList() {
    const { characters, starredCharacters } = useCharacterStore();
    const starredCharactersLength = Object.values(starredCharacters).length;

    return (
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
    );
}

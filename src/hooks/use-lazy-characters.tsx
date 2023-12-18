import { getCharacters } from '@/services/characters';
import useCharacterStore from '@/store/character-store';
import type { Character, Filters } from '@/types';
import { useLazyQuery } from '@apollo/client';

type NameFilter = { nameFilter: string };

export default function useLazyCharacters({
    characterFilter,
    speciesFilter,
    statusFilter,
    genderFilter,
    nameFilter,
}: Filters & NameFilter) {
    const { starredCharacters, setCharacters } = useCharacterStore();
    const [query, { loading, error, data }] = useLazyQuery(
        getCharacters({
            page: 1,
            filters: {
                characterFilter,
                speciesFilter,
                statusFilter,
                genderFilter,
                nameFilter,
            },
        }),
        {
            fetchPolicy: 'network-only',
        }
    );

    const filterStarredCharacters = (charactersToFilter: Character[]) => {
        const charactersCopy = charactersToFilter.filter(
            (c) => starredCharacters[c.id] !== undefined
        );
        return charactersCopy;
    };

    const filterOtherCharacters = (charactersToFilter: Character[]) => {
        const charactersCopy = charactersToFilter.filter(
            (c) => starredCharacters[c.id] === undefined
        );
        return charactersCopy;
    };

    const getLazyCharacters = async () => {
        const { data } = await query();
        const newCharacters: Character[] = data?.characters.results ?? [];

        switch (characterFilter) {
            case 'All':
                setCharacters(newCharacters);
                break;
            case 'Others':
                setCharacters(filterOtherCharacters(newCharacters));
                break;
            case 'Starred':
                setCharacters(filterStarredCharacters(newCharacters));
                break;
        }
    };

    return { getLazyCharacters, loading, error, data };
}

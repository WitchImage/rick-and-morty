import { getCharacters } from '@/services/characters';
import useCharacterStore from '@/store/character-store';
import type { Character, Filters } from '@/types';
import { useLazyQuery } from '@apollo/client';
import { toast } from 'react-toastify';

type NameFilter = { nameFilter: string };

export default function useLazyCharacters({
    characterFilter,
    speciesFilter,
    statusFilter,
    genderFilter,
    nameFilter,
}: Filters & NameFilter) {
    const { starredCharacters, setCharacters, deletedCharacters } =
        useCharacterStore();
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

    const deleteCharacters = (charactersToFilter: Character[]) => {
        const charactersCopy = charactersToFilter.filter(
            (c) => deletedCharacters[c.id] === undefined
        );
        return charactersCopy;
    };

    const getLazyCharacters = async () => {
        try {
            const { data } = await query();
            const newCharacters: Character[] = data?.characters.results ?? [];
            const c = deleteCharacters(newCharacters);

            switch (characterFilter) {
                case 'All':
                    setCharacters(c);
                    break;
                case 'Others':
                    setCharacters(filterOtherCharacters(c));
                    break;
                case 'Starred':
                    setCharacters(filterStarredCharacters(c));
                    break;
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            toast.error(e.message);
        }
    };

    return { getLazyCharacters, loading, error, data };
}

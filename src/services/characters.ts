import type { Filters } from '@/types';
import { gql } from '@apollo/client';

type NameFilter = { nameFilter: string };

interface getCharactersParams {
    page: number;
    filters?: Filters & NameFilter;
}

export function getCharacters({
    page,
    filters = {
        characterFilter: 'All',
        speciesFilter: 'All',
        genderFilter: 'All',
        statusFilter: 'All',
        nameFilter: '',
    },
}: getCharactersParams) {
    const getFilters = () => {
        let queryFilters = '{';

        const { speciesFilter, genderFilter, statusFilter, nameFilter } =
            filters;
        if (speciesFilter !== undefined && speciesFilter !== 'All')
            queryFilters += `species: "${speciesFilter}"`;

        if (genderFilter !== undefined && genderFilter !== 'All')
            queryFilters += `, gender: "${genderFilter}"`;

        if (statusFilter !== undefined && statusFilter !== 'All')
            queryFilters += `, status: "${statusFilter}"`;

        if (nameFilter !== undefined && nameFilter !== '')
            queryFilters += `, name: "${nameFilter}"`;

        queryFilters += '}';
        return queryFilters;
    };
    getFilters();

    return gql`
        query Characters {
            characters(page: ${page}, filter: ${getFilters()}) {
                results {
                    id
                    name
                    status
                    species
                    type
                    gender
                    image
                }
                info {
                    pages
                    next
                    prev
                }
            }
        }
    `;
}

export function getCharacter(characterId: string) {
    return gql`
        query Character {
            character(id: ${characterId}) {
                id
                name
                status
                species
                gender
                image
            }
        }
    `;
}

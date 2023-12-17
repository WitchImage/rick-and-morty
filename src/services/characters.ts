import type { Characterfilter, SpeciesFilter } from '@/types';
import { gql } from '@apollo/client';

interface getCharactersParams {
    page: number;
    filters?: {
        characterFilter: Characterfilter;
        speciesFilter: SpeciesFilter;
    };
}

export function getCharacters({
    page,
    filters = { characterFilter: 'All', speciesFilter: 'All' },
}: getCharactersParams) {
    const getFilters = () => {
        let queryFilters = '{';

        const { speciesFilter } = filters;
        if (speciesFilter !== 'All')
            queryFilters += `species: "${speciesFilter}"`;

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

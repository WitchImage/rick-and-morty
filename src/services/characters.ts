import { gql } from '@apollo/client';

interface getCharactersParams {
    page: number;
}

export function getCharacters({ page }: getCharactersParams) {
    return gql`
        query Characters {
            characters(page: ${page}) {
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

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

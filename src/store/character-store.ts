import type { CharacterComments, Character, Comment } from '@/types';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

type OrderBy = 'none' | 'A-Z' | 'Z-A';

interface CommentToPost {
    characterId: string;
    message: string;
}

interface CharactersHashTable {
    [key: string]: Character;
}

interface CharacterStore {
    orderBy: OrderBy;
    characters: Character[];
    starredCharacters: CharactersHashTable;
    deletedCharacters: CharactersHashTable;
    characterComments: CharacterComments;
    setOrderBy: (value: OrderBy) => void;
    setCharacters: (characters: Character[]) => void;
    addStarredCharacter: (character: Character) => void;
    removeStarredCharacter: (characterId: string) => void;
    addDeletedCharacter: (character: Character) => void;
    removeDeletedCharacter: (characterId: string) => void;
    addComent: (comment: CommentToPost) => void;
}

const useCharacterStore = create<CharacterStore>()(
    devtools(
        persist(
            (set) => ({
                orderBy: 'none',
                characters: [],
                starredCharacters: {},
                deletedCharacters: {},
                characterComments: {},
                setOrderBy: (value) =>
                    set((state) => {
                        const c = [...state.characters];
                        if (value === 'A-Z')
                            c.sort((a, b) =>
                                a.name < b.name ? -1 : a.name > b.name ? 1 : 0
                            );
                        else if (value === 'Z-A')
                            c.sort((a, b) =>
                                a.name < b.name ? 1 : a.name > b.name ? -1 : 0
                            );

                        return {
                            orderBy: value,
                            characters: c,
                        };
                    }),
                setCharacters: (c) => set(() => ({ characters: c })),
                addStarredCharacter: (c) =>
                    set((state) => {
                        const sc = { ...state.starredCharacters };
                        sc[c.id] = c;
                        return {
                            starredCharacters: sc,
                        };
                    }),
                removeStarredCharacter: (characterId) =>
                    set((state) => {
                        const sc = { ...state.starredCharacters };
                        delete sc[characterId];
                        return {
                            starredCharacters: sc,
                        };
                    }),
                addDeletedCharacter: (c) =>
                    set((state) => {
                        const dc = { ...state.deletedCharacters };
                        dc[c.id] = c;
                        return {
                            deletedCharacters: dc,
                            characters: state.characters.filter(
                                (c) => dc[c.id] === undefined
                            ),
                        };
                    }),
                removeDeletedCharacter: (characterId) =>
                    set((state) => {
                        const dc = { ...state.deletedCharacters };
                        delete dc[characterId];
                        return {
                            deletedCharacters: dc,
                            characters: state.characters.filter(
                                (c) => dc[c.id] === undefined
                            ),
                        };
                    }),
                addComent: (comment) =>
                    set((state) => {
                        const { message, characterId } = comment;
                        const comments = { ...state.characterComments };

                        const newComment: Comment = {
                            message: message,
                            createdAt: new Date().toISOString(),
                        };

                        if (!comments[characterId])
                            comments[characterId] = [newComment];
                        else comments[characterId].unshift(newComment);

                        return {
                            characterComments: comments,
                        };
                    }),
            }),
            {
                name: 'comments',
                partialize: (state) => ({
                    characters: state.characters,
                    starredCharacters: state.starredCharacters,
                    deletedCharacters: state.deletedCharacters,
                    characterComments: state.characterComments,
                }),
            }
        ),
        {
            name: 'charactersStore',
        }
    )
);

export default useCharacterStore;

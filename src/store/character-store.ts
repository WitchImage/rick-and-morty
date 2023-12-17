import type { CharacterComments, Character, Comment } from '@/types';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface CommentToPost {
    characterId: string;
    message: string;
}

interface CharacterStore {
    characters: Character[];
    starredCharacters: { [key: string]: Character };
    characterComments: CharacterComments;
    setCharacters: (characters: Character[]) => void;
    addStarredCharacter: (character: Character) => void;
    removeStarredCharacter: (characterId: string) => void;
    addComent: (comment: CommentToPost) => void;
}

const useCharacterStore = create<CharacterStore>()(
    devtools(
        persist(
            (set) => ({
                characters: [],
                starredCharacters: {},
                characterComments: {},
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

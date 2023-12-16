import { type Character } from '@/types';
import { create } from 'zustand';

interface CharacterStore {
    characters: Character[];
    starredCharacters: { [key: string]: Character };
    setCharacters: (characters: Character[]) => void;
    addStarredCharacter: (character: Character) => void;
    removeStarredCharacter: (characterId: string) => void;
}

const useCharacterStore = create<CharacterStore>()((set) => ({
    characters: [],
    starredCharacters: {},
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
}));

export default useCharacterStore;

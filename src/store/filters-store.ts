import type { Characterfilter, SpeciesFilter } from '@/types';
import { create } from 'zustand';

interface FiltersStore {
    characterFilter: Characterfilter;
    speciesFilter: SpeciesFilter;
    setCharacterFilter: (value: Characterfilter) => void;
    setSpeciesFilter: (value: SpeciesFilter) => void;
}

const useFiltersStore = create<FiltersStore>()((set) => ({
    characterFilter: 'All',
    speciesFilter: 'All',
    setCharacterFilter: (value) =>
        set(() => ({
            characterFilter: value,
        })),
    setSpeciesFilter: (value) =>
        set(() => ({
            speciesFilter: value,
        })),
}));

export default useFiltersStore;

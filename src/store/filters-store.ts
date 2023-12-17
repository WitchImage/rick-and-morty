import type { Characterfilter, SpeciesFilter } from '@/types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface FiltersStore {
    characterFilter: Characterfilter;
    speciesFilter: SpeciesFilter;
    setCharacterFilter: (value: Characterfilter) => void;
    setSpeciesFilter: (value: SpeciesFilter) => void;
}

const useFiltersStore = create<FiltersStore>()(
    devtools(
        (set) => ({
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
        }),
        { name: 'filterStore' }
    )
);

export default useFiltersStore;

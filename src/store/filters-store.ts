import type {
    Characterfilter,
    Filters,
    GenderFilter,
    SpeciesFilter,
    StatusFilter,
} from '@/types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface FiltersStore {
    characterFilter: Characterfilter;
    speciesFilter: SpeciesFilter;
    statusFilter: StatusFilter;
    genderFilter: GenderFilter;
    setCharacterFilter: (value: Characterfilter) => void;
    setSpeciesFilter: (value: SpeciesFilter) => void;
    setStatusFilter: (value: StatusFilter) => void;
    setGenderFilter: (value: GenderFilter) => void;
    setFilters: (filters: Filters) => void;
}

const useFiltersStore = create<FiltersStore>()(
    devtools(
        (set) => ({
            characterFilter: 'All',
            speciesFilter: 'All',
            statusFilter: 'All',
            genderFilter: 'All',
            setCharacterFilter: (value) =>
                set(() => ({
                    characterFilter: value,
                })),
            setSpeciesFilter: (value) =>
                set(() => ({
                    speciesFilter: value,
                })),
            setStatusFilter: (value) =>
                set(() => ({
                    statusFilter: value,
                })),
            setGenderFilter: (value) =>
                set(() => ({
                    genderFilter: value,
                })),
            setFilters: (filters) =>
                set(() => {
                    const {
                        characterFilter,
                        speciesFilter,
                        genderFilter,
                        statusFilter,
                    } = filters;
                    return {
                        characterFilter,
                        speciesFilter,
                        genderFilter,
                        statusFilter,
                    };
                }),
        }),
        { name: 'filterStore' }
    )
);

export default useFiltersStore;

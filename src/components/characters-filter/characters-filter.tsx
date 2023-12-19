import Button from '../button/button';
import { GoArrowLeft } from 'react-icons/go';
import useFiltersStore from '@/store/filters-store';
import type {
    Characterfilter,
    GenderFilter,
    SpeciesFilter,
    StatusFilter,
} from '@/types';
import { useState } from 'react';
import GenderFilters from './gender-filters';
import StatusFilters from './status-filters';
import SpeciesFilters from './species-filters';
import StarredFilters from './starred-filters';
import useLazyCharacters from '@/hooks/use-lazy-characters';

interface CharactersFilterProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export default function CharactersFilter({
    open,
    setOpen,
}: CharactersFilterProps) {
    const {
        characterFilter,
        speciesFilter,
        statusFilter,
        genderFilter,
        setFilters,
    } = useFiltersStore();

    const [localCharacterFilter, setLocalCharacterFilter] =
        useState<Characterfilter>(characterFilter);
    const [localSpeciesFilter, setLocalSpeciesFilter] =
        useState<SpeciesFilter>(speciesFilter);
    const [localStatusFilter, setLocalStatusFilter] =
        useState<StatusFilter>(statusFilter);
    const [localGenderFilter, setLocalGenderFilter] =
        useState<GenderFilter>(genderFilter);

    const { getLazyCharacters } = useLazyCharacters({
        characterFilter: localCharacterFilter,
        speciesFilter: localSpeciesFilter,
        statusFilter: localStatusFilter,
        genderFilter: localGenderFilter,
        nameFilter: '',
    });

    const handleFilterClick = async () => {
        setFilters({
            characterFilter: localCharacterFilter,
            speciesFilter: localSpeciesFilter,
            statusFilter: localStatusFilter,
            genderFilter: localGenderFilter,
        });
        getLazyCharacters();

        setOpen(false);
    };

    if (!open) return;

    return (
        <div
            className="z-20 h-screen lg:h-fit lg:top-[60px] rounded-md shadow-md top-0 fixed lg:absolute
            inset-x-0 mx-auto w-[95%] bg-white border border-gray-500
            grid grid-rows-[repeat(2,72px)] gap-[24px] px-[14px] py-[24px] justify-center
            "
        >
            <div className="flex flex-row items-center lg:hidden">
                <Button variant="unstyled" onClick={() => setOpen(false)}>
                    <GoArrowLeft size={25} className="fill-primary-600" />
                </Button>
                <span className="flex-1 block font-semibold text-center">
                    Filters
                </span>
            </div>
            <StarredFilters
                filter={localCharacterFilter}
                setFilter={setLocalCharacterFilter}
            />
            <SpeciesFilters
                filter={localSpeciesFilter}
                setFilter={setLocalSpeciesFilter}
            />
            <StatusFilters
                filter={localStatusFilter}
                setFilter={setLocalStatusFilter}
            />
            <GenderFilters
                filter={localGenderFilter}
                setFilter={setLocalGenderFilter}
            />
            <Button
                variant="gray"
                onClick={handleFilterClick}
                className="absolute bottom-0 inset-x-0 mx-auto w-full mb-3 max-w-[322px] lg:mb-0 lg:static"
            >
                Filter
            </Button>
        </div>
    );
}

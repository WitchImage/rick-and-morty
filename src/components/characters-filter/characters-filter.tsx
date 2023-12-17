import Button from '../button/button';
import { GoArrowLeft } from 'react-icons/go';
import useFiltersStore from '@/store/filters-store';
import type { Character, Characterfilter, SpeciesFilter } from '@/types';
import { useLazyQuery } from '@apollo/client';
import useCharacterStore from '@/store/character-store';
import { useState } from 'react';
import { getCharacters } from '@/services/characters';

interface CharactersFilterProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

type FilterSelectionParams =
    | {
          filter: 'character';
          value: Characterfilter;
      }
    | {
          filter: 'species';
          value: SpeciesFilter;
      };

export default function CharactersFilter({
    open,
    setOpen,
}: CharactersFilterProps) {
    const { starredCharacters, setCharacters } = useCharacterStore();
    const {
        characterFilter,
        speciesFilter,
        setCharacterFilter,
        setSpeciesFilter,
    } = useFiltersStore();

    const [localCharacterFilter, setLocalCharacterFilter] =
        useState<Characterfilter>(characterFilter);
    const [localSpeciesFilter, setLocalSpeciesFilter] =
        useState<SpeciesFilter>(speciesFilter);

    const [query] = useLazyQuery(
        getCharacters({
            page: 1,
            filters: {
                characterFilter: localCharacterFilter,
                speciesFilter: localSpeciesFilter,
            },
        }),
        {
            fetchPolicy: 'network-only',
        }
    );

    const handleFilterSelectionClick =
        (params: FilterSelectionParams) => () => {
            switch (params.filter) {
                case 'character':
                    setLocalCharacterFilter(params.value);
                    break;
                case 'species':
                    setLocalSpeciesFilter(params.value);
                    break;
            }
        };

    const filterStarredCharacters = (charactersToFilter: Character[]) => {
        const starredCharactersIDs = Object.keys(starredCharacters);
        return charactersToFilter.filter((c) =>
            starredCharactersIDs.includes(c.id)
        );
    };

    const handleFilterClick = async () => {
        setCharacterFilter(localCharacterFilter);
        setSpeciesFilter(localSpeciesFilter);
        const { data } = await query();
        const newCharacters: Character[] = data?.characters.results ?? [];

        switch (characterFilter) {
            case 'All':
                setCharacters(newCharacters);
                break;
            case 'Starred':
                setCharacters(filterStarredCharacters(newCharacters));
                break;
        }

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
            <div>
                <span className="block">Character</span>
                <div className="grid grid-cols-[repeat(3,102px)] gap-[8px] w-full">
                    <Button
                        variant={
                            localCharacterFilter === 'All'
                                ? 'lightPrimary'
                                : 'white'
                        }
                        className="h-[44px] w-full"
                        onClick={handleFilterSelectionClick({
                            filter: 'character',
                            value: 'All',
                        })}
                    >
                        All
                    </Button>
                    <Button
                        variant={
                            localCharacterFilter === 'Starred'
                                ? 'lightPrimary'
                                : 'white'
                        }
                        className="h-[44px] w-full"
                        onClick={handleFilterSelectionClick({
                            filter: 'character',
                            value: 'Starred',
                        })}
                    >
                        Starred
                    </Button>
                    <Button
                        variant={
                            localCharacterFilter === 'Others'
                                ? 'lightPrimary'
                                : 'white'
                        }
                        className="h-[44px] w-full"
                        onClick={handleFilterSelectionClick({
                            filter: 'character',
                            value: 'Others',
                        })}
                    >
                        Others
                    </Button>
                </div>
            </div>
            <div>
                <span className="block">Specie</span>
                <div className="grid grid-cols-[repeat(3,102px)] gap-[8px] w-full">
                    <Button
                        variant={
                            localSpeciesFilter === 'All'
                                ? 'lightPrimary'
                                : 'white'
                        }
                        className="h-[44px] w-full"
                        onClick={handleFilterSelectionClick({
                            filter: 'species',
                            value: 'All',
                        })}
                    >
                        All
                    </Button>
                    <Button
                        variant={
                            localSpeciesFilter === 'Human'
                                ? 'lightPrimary'
                                : 'white'
                        }
                        className="h-[44px] w-full"
                        onClick={handleFilterSelectionClick({
                            filter: 'species',
                            value: 'Human',
                        })}
                    >
                        Human
                    </Button>
                    <Button
                        variant={
                            localSpeciesFilter === 'Alien'
                                ? 'lightPrimary'
                                : 'white'
                        }
                        className="h-[44px] w-full"
                        onClick={handleFilterSelectionClick({
                            filter: 'species',
                            value: 'Alien',
                        })}
                    >
                        Alien
                    </Button>
                </div>
            </div>
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

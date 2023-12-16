import { useState } from 'react';
import Button from '../button/button';
import { GoArrowLeft } from 'react-icons/go';

interface CharactersFilterProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export default function CharactersFilter({
    open,
    setOpen,
}: CharactersFilterProps) {
    const [characterFilter, setCharacterFilter] = useState<
        'All' | 'Starred' | 'Others'
    >('All');
    const [speciesFilter, setSpeciesFilter] = useState<
        'All' | 'Human' | 'Alien'
    >('All');

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
                            characterFilter === 'All' ? 'lightPrimary' : 'white'
                        }
                        className="h-[44px] w-full"
                    >
                        All
                    </Button>
                    <Button
                        variant={
                            characterFilter === 'Starred'
                                ? 'lightPrimary'
                                : 'white'
                        }
                        className="h-[44px] w-full"
                    >
                        Starred
                    </Button>
                    <Button
                        variant={
                            characterFilter === 'Others'
                                ? 'lightPrimary'
                                : 'white'
                        }
                        className="h-[44px] w-full"
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
                            speciesFilter === 'All' ? 'lightPrimary' : 'white'
                        }
                        className="h-[44px] w-full"
                    >
                        All
                    </Button>
                    <Button
                        variant={
                            speciesFilter === 'Human' ? 'lightPrimary' : 'white'
                        }
                        className="h-[44px] w-full"
                    >
                        Human
                    </Button>
                    <Button
                        variant={
                            speciesFilter === 'Alien' ? 'lightPrimary' : 'white'
                        }
                        className="h-[44px] w-full"
                    >
                        Alien
                    </Button>
                </div>
            </div>
            <Button
                variant="gray"
                onClick={() => setOpen(false)}
                className="absolute bottom-0 inset-x-0 mx-auto w-full mb-3 max-w-[322px] lg:mb-0 lg:static"
            >
                Filter
            </Button>
        </div>
    );
}

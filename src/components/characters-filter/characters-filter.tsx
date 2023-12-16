import { useState } from 'react';
import Button from '../button/button';

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
            className="z-20 top-[60px] rounded-md shadow-md absolute
            inset-x-0 mx-auto w-[95%] bg-white border border-gray-500
            grid grid-rows-[repeat(2,72px)] gap-[24px] px-[14px] py-[24px] justify-center
            "
        >
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
            <Button variant="gray" onClick={() => setOpen(false)}>
                Filter
            </Button>
        </div>
    );
}

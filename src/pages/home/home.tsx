import MainLayout from '@/layouts/main-layout';
import CharacterCard from './components/character-card';
import useCharacterStore from '@/store/character-store';
import { useEffect } from 'react';
import useFiltersStore from '@/store/filters-store';
import useLazyCharacters from '@/hooks/use-lazy-characters';

export default function Home() {
    const { characters } = useCharacterStore();
    const { characterFilter, speciesFilter, genderFilter, statusFilter } =
        useFiltersStore();
    const { getLazyCharacters } = useLazyCharacters({
        characterFilter,
        speciesFilter,
        genderFilter,
        statusFilter,
        nameFilter: '',
    });

    useEffect(() => {
        if (characters.length > 0) return;

        getLazyCharacters();
    }, []);

    return (
        <MainLayout>
            <main className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10 p-14">
                {characters.map((c) => (
                    <CharacterCard key={c.id} character={c} />
                ))}
            </main>
        </MainLayout>
    );
}

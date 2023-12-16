import { useQuery } from '@apollo/client';
import { getCharacters } from '../../services/characters';
import { Character } from '@/types';
import MainLayout from '@/layouts/main-layout';
import CharacterCard from './components/character-card';
import useCharacterStore from '@/store/character-store';
import { useEffect } from 'react';

export default function Home() {
    const { setCharacters } = useCharacterStore();
    const { data } = useQuery(getCharacters({ page: 1 }));
    const characters: Character[] = data?.characters.results ?? [];

    useEffect(() => {
        if (characters.length > 0) setCharacters(characters);
    }, [characters]);

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

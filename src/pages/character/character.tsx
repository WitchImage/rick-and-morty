import MainLayout from '@/layouts/main-layout';
import ROUTES from '@/lib/constants/routes';
import { getCharacter } from '@/services/characters';
import type { Character } from '@/types';
import { useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import StarButton from '@/components/star-button';
import Comments from './components/comments';

export default function Character() {
    const navigate = useNavigate();
    const { characterId } = useParams();

    if (!characterId) {
        navigate(ROUTES.HOME);
        return;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, data } = useQuery(getCharacter(characterId));

    if (loading) {
        return (
            <MainLayout>
                <main>
                    <h1>Cargando</h1>
                </main>
            </MainLayout>
        );
    }

    const character: Character = data?.character;
    const { name, image, species, status, gender } = character;
    return (
        <MainLayout>
            <main className="mx-[100px] mt-[40px]">
                <section className="flex flex-col w-full space-y-[8px] pb-[16px]">
                    <div className="relative h-[75px] w-[75px]">
                        <img
                            src={image}
                            alt={`Imagen de ${name}`}
                            className="w-full h-full rounded-full"
                        />
                        <StarButton
                            character={character}
                            className="absolute bottom-0 right-0 bg-white"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <FaArrowLeft
                            size={20}
                            onClick={() => navigate(ROUTES.HOME)}
                            className="fill-[var(--foreground-color) hover:cursor-pointer"
                        />
                        <h1 className="text-xl font-bold">{name}</h1>
                    </div>
                </section>
                <section className="w-full grid grid-rows-[repeat(3,75px)]">
                    <div className="flex flex-col justify-center w-full">
                        <span className="block font-medium">Species</span>
                        <span>{species}</span>
                    </div>
                    <div className="flex flex-col justify-center w-full">
                        <span className="block font-medium">Status</span>
                        <span>{status}</span>
                    </div>
                    <div className="flex flex-col justify-center w-full">
                        <span className="block font-medium">Gender</span>
                        <span>{gender}</span>
                    </div>
                </section>
                <hr className="my-4" />
                <Comments characterId={characterId} />
            </main>
        </MainLayout>
    );
}

/* eslint-disable react-hooks/rules-of-hooks */
import MainLayout from '@/layouts/main-layout';
import ROUTES from '@/lib/constants/routes';
import { getCharacter } from '@/services/characters';
import type { Character } from '@/types';
import { useLazyQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import StarButton from '@/components/star-button';
import Comments from './components/comments';
import Loader from '@/components/loader';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Character() {
    const navigate = useNavigate();
    const { characterId } = useParams();

    if (!characterId) {
        navigate(ROUTES.HOME);
        return;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [query, { loading, data }] = useLazyQuery(getCharacter(characterId));

    useEffect(() => {
        try {
            query();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            toast.error(e.message);
        }
    }, []);

    if (loading) {
        return (
            <MainLayout>
                <main className="flex justify-center w-full h-full mt-24">
                    <Loader />
                </main>
            </MainLayout>
        );
    }

    const character: Character = data?.character;
    if (!character) {
        return (
            <MainLayout>
                <main className="lg:mx-[100px] mt-[40px] mx-[24px]">
                    <FaArrowLeft
                        size={20}
                        onClick={() => navigate(ROUTES.HOME)}
                        className="fill-primary-600 hover:cursor-pointer mb-[28px]"
                    />
                    <h1>Character not found</h1>
                </main>
            </MainLayout>
        );
    }

    const { name, image, species, status, gender } = character;
    return (
        <MainLayout>
            <main className="lg:mx-[100px] mt-[40px] mx-[24px]">
                <section className="flex flex-col w-full space-y-[8px] pb-[16px]">
                    <FaArrowLeft
                        size={20}
                        onClick={() => navigate(ROUTES.HOME)}
                        className="fill-primary-600 hover:cursor-pointer mb-[28px]"
                    />
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
                    <h1 className="text-xl font-bold">{name}</h1>
                </section>
                <section className="w-full grid grid-rows-[repeat(3,75px)] divide-y">
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

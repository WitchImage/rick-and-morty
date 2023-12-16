import Card from '@/components/card/card.tsx';
import ROUTES from '@/lib/constants/routes';
import { type Character } from '@/types';
import { useNavigate } from 'react-router-dom';

interface CharacterCardProps {
    character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
    const { id, name, image, species } = character;
    const navigate = useNavigate();

    return (
        <Card
            className="relative h-[300px] transition-transform hover:scale-[1.1] hover:cursor-pointer"
            onClick={() => navigate(`${ROUTES.CHARACTERS}/${id}`)}
        >
            <span className="z-10 text-2xl font-bold text-center text-white">
                {name}
            </span>
            <img
                src={image}
                alt={`Imagen de ${name}`}
                className="absolute w-full h-full rounded-md"
            />
            <span className="absolute bottom-0 z-10 px-2 py-1 mb-4 text-sm font-medium text-white rounded-full bg-primary-600">
                {species}
            </span>
        </Card>
    );
}

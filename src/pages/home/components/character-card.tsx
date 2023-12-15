import Card from '@/components/card/card.tsx';
import { type Character } from '@/types';

interface CharacterCardProps {
    character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
    const { name, image, species } = character;

    return (
        <Card className="relative h-[300px] transition-transform hover:scale-[1.1] hover:cursor-pointer">
            <span className="z-10 text-2xl text-white font-bold text-center">
                {name}
            </span>
            <img
                src={image}
                alt={`Imagen de ${name}`}
                className="rounded-md absolute h-full w-full"
            />
            <span className="mb-4 z-10 text-white text-sm font-medium absolute bottom-0 bg-primary-600 py-1 px-2 rounded-full">
                {species}
            </span>
        </Card>
    );
}

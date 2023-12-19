import ROUTES from '@/lib/constants/routes';
import { type Character } from '@/types';
import { useNavigate } from 'react-router-dom';
import StarButton from '../star-button';
import DeleteButton from '../delete-button';

interface CharacterItemProps {
    character: Character;
    isStarred: boolean;
}

export default function CharacterItem({ character }: CharacterItemProps) {
    const { id, name, image, species } = character;
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`${ROUTES.CHARACTERS}/${id}`);
    };

    return (
        <li
            className="relative px-[20px] py-[16px] flex flex-row items-center hover:bg-primary-100 rounded-md hover:cursor-pointer"
            onClick={handleItemClick}
        >
            <img
                src={image}
                aria-hidden={true}
                width={32}
                height={32}
                className="rounded-full mr-[16px]"
            />
            <div>
                <span className="block font-bold">{name}</span>
                <span className="text-sm">{species}</span>
            </div>
            <div className="z-10 absolute right-0 mr-[20px] flex flex-row">
                <DeleteButton character={character} />
                <StarButton character={character} />
            </div>
        </li>
    );
}

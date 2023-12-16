import useCharacterStore from '@/store/character-store';
import { type Character } from '@/types';
import { IoIosHeart, IoMdHeartEmpty } from 'react-icons/io';

interface CharacterItemProps {
    character: Character;
    isStarred: boolean;
}

export default function CharacterItem({
    character,
    isStarred,
}: CharacterItemProps) {
    const { name, image, species } = character;
    const { addStarredCharacter, removeStarredCharacter } = useCharacterStore();

    const handleItemClick = () => {
        console.log('li');
    };

    const handleUnstarCharacterIconClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        removeStarredCharacter(character.id);
    };

    const handleStarCharacterIconClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        addStarredCharacter(character);
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
            {isStarred ? (
                <IoIosHeart
                    size={25}
                    className="z-10 absolute right-0 mr-[20px] hover:cursor-pointer fill-secondary-600 hover:fill-red-400"
                    onClick={handleUnstarCharacterIconClick}
                />
            ) : (
                <IoMdHeartEmpty
                    size={25}
                    className="z-10 absolute right-0 mr-[20px] hover:cursor-pointer hover:fill-secondary-600"
                    onClick={handleStarCharacterIconClick}
                />
            )}
        </li>
    );
}

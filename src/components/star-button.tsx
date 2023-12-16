import { cn } from '@/lib/utils/cn';
import useCharacterStore from '@/store/character-store';
import { type Character } from '@/types';
import { IoIosHeart, IoMdHeartEmpty } from 'react-icons/io';

interface StarButtonProps {
    character: Character;
    className?: string;
}

export default function StarButton({ character, className }: StarButtonProps) {
    const { addStarredCharacter, removeStarredCharacter, starredCharacters } =
        useCharacterStore();
    const isStarred = starredCharacters[character.id];

    const handleUnstarCharacterIconClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        removeStarredCharacter(character.id);
    };

    const handleStarCharacterIconClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        addStarredCharacter(character);
    };

    const classes = {
        'bg-white': isStarred,
        'bg-transparent': !isStarred,
    };

    return (
        <div
            className={cn(
                'h-[32px] w-[32px] flex items-center justify-center rounded-full',
                classes,
                className
            )}
        >
            {isStarred ? (
                <IoIosHeart
                    size={25}
                    className="hover:cursor-pointer fill-secondary-600 hover:fill-red-400"
                    onClick={handleUnstarCharacterIconClick}
                />
            ) : (
                <IoMdHeartEmpty
                    size={25}
                    className="hover:cursor-pointer hover:fill-secondary-600"
                    onClick={handleStarCharacterIconClick}
                />
            )}
        </div>
    );
}

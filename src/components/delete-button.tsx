import { cn } from '@/lib/utils/cn';
import useCharacterStore from '@/store/character-store';
import { type Character } from '@/types';
import { PiTrashSimpleLight, PiTrashSimpleFill } from 'react-icons/pi';

interface StarButtonProps {
    character: Character;
    className?: string;
}

export default function DeleteButton({
    character,
    className,
}: StarButtonProps) {
    const { addDeletedCharacter, deletedCharacters } = useCharacterStore();
    const isDeleted = deletedCharacters[character.id];

    const handleDeleteCharacterIconClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        addDeletedCharacter(character);
    };

    const classes = {
        'bg-white': isDeleted,
        'bg-transparent': !isDeleted,
    };

    return (
        <div
            className={cn(
                'h-[32px] w-[32px] flex items-center justify-center rounded-full',
                classes,
                className
            )}
        >
            {isDeleted ? (
                <PiTrashSimpleFill
                    size={25}
                    className="hover:cursor-pointer fill-red-400 hover:fill-secondary-600"
                    onClick={handleDeleteCharacterIconClick}
                />
            ) : (
                <PiTrashSimpleLight
                    size={25}
                    className="hover:cursor-pointer hover:fill-red-600"
                    onClick={handleDeleteCharacterIconClick}
                />
            )}
        </div>
    );
}

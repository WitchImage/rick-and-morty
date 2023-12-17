import Button from '@/components/button/button';
import useCharacterStore from '@/store/character-store';
import { useState } from 'react';
import CommentsList from './comments-list';

interface CommentsProps {
    characterId: string;
}

export default function Comments({ characterId }: CommentsProps) {
    const { addComent, characterComments } = useCharacterStore();
    const [comment, setComment] = useState<string>('');
    const comments = characterComments[characterId];

    return (
        <section className="w-full">
            <h2 className="mb-3 text-xl font-bold">Comentarios</h2>
            <form
                className="w-full"
                onSubmit={() => addComent({ characterId, message: comment })}
            >
                <label htmlFor="comment" className="block mb-2 font-semibold">
                    Write a new comment
                </label>
                <textarea
                    className="rounded-md outline outline-1 outline-gray-700 w-full max-w-[350px] h-28 p-3 focus:outline-primary-600 block"
                    name="comment"
                    id="comment"
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                />
                <Button
                    variant="gray"
                    className="w-full max-w-[350px] my-5"
                    type="submit"
                >
                    Post
                </Button>
            </form>
            <CommentsList comments={comments} />
        </section>
    );
}

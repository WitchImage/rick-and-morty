import Button from '@/components/button/button';
import { useState } from 'react';

export default function Comments() {
    const [comment, setComment] = useState<string>('');

    return (
        <section className="w-full">
            <h2 className="mb-3 text-xl font-bold">Comentarios</h2>
            <div className="w-full">
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
                <Button variant="gray" className="w-full max-w-[350px] my-5">
                    Save
                </Button>
            </div>
            <div></div>
        </section>
    );
}

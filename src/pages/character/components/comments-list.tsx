import type { Comment } from '@/types';

interface CommentsListProps {
    comments: Comment[] | undefined;
}

export default function CommentsList({ comments }: CommentsListProps) {
    if (comments?.length === 0) return;

    return (
        <ul className="py-10 space-y-6">
            {comments?.map((c) => (
                <li
                    key={c.createdAt}
                    className="pl-3 border-l-2 rounded-sm border-l-primary-600"
                >
                    <article className="space-y-2">
                        <h3 className="text-sm italic font-semibold text-primary-600">
                            Created at{' '}
                            {new Date(c.createdAt).toLocaleString('es-CO')}
                        </h3>
                        <p>{c.message}</p>
                    </article>
                </li>
            ))}
        </ul>
    );
}

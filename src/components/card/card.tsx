import { cn } from '@/lib/utils/cn';
import { type HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className }: CardProps) {
    return (
        <div
            className={cn(
                'rounded-md bg-white flex flex-col items-center shadow-md border-gray-500',
                className
            )}
        >
            {children}
        </div>
    );
}

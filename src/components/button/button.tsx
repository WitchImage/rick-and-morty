import { cn } from '@/lib/utils/cn';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'lightPrimary' | 'gray' | 'white' | 'unstyled';
}

export default function Button({
    variant,
    children,
    className,
    ...props
}: ButtonProps) {
    const classes = {
        'bg-primary-100 text-primary-600 font-semibold':
            variant === 'lightPrimary',
        'bg-white border border-gray-700 hover:border-primary-100 hover:bg-primary-100 font-semibold':
            variant === 'white',
        'bg-gray-500 text-gray-700 font-semibold hover:bg-primary-600 hover:text-white':
            variant === 'gray',
        'border-none bg-transparent': variant === 'unstyled',
    };

    return (
        <button
            className={cn('h-[38px] py-[9px] rounded-md', classes, className)}
            {...props}
        >
            {children}
        </button>
    );
}

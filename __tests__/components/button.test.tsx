import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '@/components/button/button';
import { vi } from 'vitest';

describe('Button component', () => {
    it('Should render a button HTML element', () => {
        const buttonText = 'Button test';

        render(<Button variant="gray">{buttonText}</Button>);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('Should call the onClick function', () => {
        const buttonText = 'Button test';
        const handleClick = vi.fn();

        render(
            <Button variant="gray" onClick={handleClick}>
                {buttonText}
            </Button>
        );

        expect(screen.getByRole('button')).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '@/components/card/card';

describe('Button component', () => {
    it('Should render a Card with its children', () => {
        const cardId = 'cardId';
        const cardTitle = 'Card title';
        const cardInnerDivId = 'divId';
        const cardContent = (
            <>
                <span>{cardTitle}</span>
                <div data-testid={cardInnerDivId}></div>
            </>
        );

        render(<Card data-testid={cardId}>{cardContent}</Card>);

        expect(screen.getByTestId(cardId)).toBeInTheDocument();
        expect(screen.getByTestId(cardId)).toContainElement(
            screen.getByText(cardTitle)
        );
        expect(screen.getByTestId(cardId)).toContainElement(
            screen.getByTestId(cardInnerDivId)
        );
    });
});

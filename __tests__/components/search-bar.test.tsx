import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '@/components/search-bar/search-bar';
import { MockedProvider } from '@apollo/client/testing';
import { getCharacters } from '@/services/characters';

const GQLMocks = [
    {
        request: {
            query: getCharacters({ page: 1 }),
        },
        result: {
            data: {
                characters: [],
            },
        },
    },
];

describe('It should render the search bar', () => {
    const searchBarId = 'searchBar';
    const searchBar = (
        <MockedProvider mocks={GQLMocks} addTypename={false}>
            <SearchBar setShowFilters={() => {}} />
        </MockedProvider>
    );

    it('Should render the search bar', () => {
        render(searchBar);

        expect(document.getElementById(searchBarId)).toBeInTheDocument();
    });

    it('Should render inner input', () => {
        render(searchBar);

        expect(document.getElementById(searchBarId)).toContainElement(
            document.getElementById('searchInput')
        );
    });

    it('Should render filter icon button', () => {
        render(searchBar);

        expect(document.getElementById(searchBarId)).toContainElement(
            document.getElementById('filtersButton')
        );
    });

    it('Should render order-by icon button', () => {
        render(searchBar);

        expect(document.getElementById(searchBarId)).toContainElement(
            document.getElementById('orderByButton')
        );
    });
});

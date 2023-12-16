import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ROUTES from './lib/constants/routes.ts';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

console.log(import.meta.env.REACT_APP_PUBLIC_API);
const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});

const HomePage = lazy(() => import('@/pages/home/home.tsx'));
const CharacterPage = lazy(() => import('@/pages/character/character.tsx'));

const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: (
            <Suspense>
                <HomePage />
            </Suspense>
        ),
    },
    {
        path: `${ROUTES.CHARACTERS}/:characterId`,
        element: (
            <Suspense>
                <CharacterPage />
            </Suspense>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <RouterProvider router={router} />
        </ApolloProvider>
    </React.StrictMode>
);


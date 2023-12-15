import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/home.tsx';
import ROUTES from './lib/constants/routes.ts';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

console.log(import.meta.env.REACT_APP_PUBLIC_API);

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});

const router = createBrowserRouter([
    {
        path: ROUTES.home,
        element: <Home />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <RouterProvider router={router} />
        </ApolloProvider>
    </React.StrictMode>
);


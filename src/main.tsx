import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/home.tsx';
import ROUTES from './lib/constants/routes.ts';

const router = createBrowserRouter([
    {
        path: ROUTES.home,
        element: <Home />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


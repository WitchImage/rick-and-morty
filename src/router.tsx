import { Suspense, lazy } from 'react';
import ROUTES from './lib/constants/routes';
import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';

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
        errorElement: <ErrorBoundary />,
    },
    {
        path: `${ROUTES.CHARACTERS}/:characterId`,
        element: (
            <Suspense>
                <CharacterPage />
            </Suspense>
        ),
        errorElement: <ErrorBoundary />,
    },
]);

export default router;

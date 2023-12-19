import { Suspense, lazy } from 'react';
import ROUTES from './lib/constants/routes';
import { createBrowserRouter } from 'react-router-dom';

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

export default router;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from 'react-router-dom';
import ROUTES from '@/lib/constants/routes';

const ErrorBoundary = () => {
    const error = useRouteError() as any;

    return (
        <section className="flex flex-col items-center justify-center w-screen h-screen space-y-4">
            <h1>Ups, an error has ocurred</h1>
            <small>{error?.message}</small>
            <a
                href={ROUTES.HOME}
                className="h-[38px] py-[9px] rounded-md bg-gray-500 text-gray-700 font-semibold hover:bg-primary-600 hover:text-white px-2"
            >
                Go back to home
            </a>
        </section>
    );
};

export default ErrorBoundary;

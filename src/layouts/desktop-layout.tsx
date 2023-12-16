import { PropsWithChildren } from 'react';
import CharactersNavbar from '../components/navbar/characters-navbar';

export default function DesktopLayout({ children }: PropsWithChildren) {
    return (
        <div className="grid grid-cols-[375px_1fr] min-h-screen">
            <CharactersNavbar />
            <div>{children}</div>
        </div>
    );
}

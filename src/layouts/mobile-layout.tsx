import { PropsWithChildren, useState } from 'react';
import MobileNavbar from '@/components/navbar/mobile-navbar';
import CharactersNavbar from '@/components/navbar/characters-navbar';

export default function MobileLayout({ children }: PropsWithChildren) {
    const [showCharactersNavar, setShowCharactersNavbar] =
        useState<boolean>(false);

    return (
        <div className="min-h-screen">
            {showCharactersNavar ? (
                <CharactersNavbar
                    setShow={setShowCharactersNavbar}
                    className="w-full min-h-screen bg-white peer"
                />
            ) : (
                <div className="pb-[83px]">{children}</div>
            )}
            <MobileNavbar setShowCharactersNavbar={setShowCharactersNavbar} />
        </div>
    );
}

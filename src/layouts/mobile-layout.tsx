import { PropsWithChildren } from 'react';
import MobileNavbar from '@/components/navbar/mobile-navbar';

export default function MobileLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen">
            <div className="pb-[83px]">{children}</div>
            <MobileNavbar />
        </div>
    );
}

import { PropsWithChildren } from 'react';
import DesktopNavbar from '../components/navbar/desktop-navbar';

export default function DesktopLayout({ children }: PropsWithChildren) {
    return (
        <div className="grid grid-cols-[375px_1fr] min-h-screen">
            <DesktopNavbar />
            <div>{children}</div>
        </div>
    );
}

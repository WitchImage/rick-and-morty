import { PropsWithChildren } from 'react';
import DesktopLayout from './desktop-layout';

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <>
            <DesktopLayout>{children}</DesktopLayout>
        </>
    );
}

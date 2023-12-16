import { PropsWithChildren } from 'react';
import DesktopLayout from './desktop-layout';
import useWindowDimensions from '@/hooks/use-window-dimension';
import MobileLayout from './mobile-layout';

const MOBILE_BREAKPOINT = 1024;

export default function MainLayout({ children }: PropsWithChildren) {
    const { width } = useWindowDimensions();

    if (width > MOBILE_BREAKPOINT)
        return <DesktopLayout>{children}</DesktopLayout>;

    return <MobileLayout>{children}</MobileLayout>;
}

import { PropsWithChildren, useState } from 'react';
import Navbar from '@/layouts/navbar';
import ResponsiveNavbar from '@/layouts/responsive-navbar';

export default function AppLayout({ children }: PropsWithChildren) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <ResponsiveNavbar openCommandPalette={open} setOpenCommandPalette={setOpen} />
            <Navbar openCommandPalette={open} setOpenCommandPalette={setOpen} />
            {children}
        </div>
    );
}

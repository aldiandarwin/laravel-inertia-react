import { PropsWithChildren, useState } from 'react';
import Navbar from '@/layouts/navbar';
import Menu from '@/layouts/menu';
import ResponsiveSidebar from '@/layouts/responsive-sidebar';
import UserResponsiveNavbar from '@/layouts/user-responsive-navbar';

export default function UserLayout({ children }: PropsWithChildren) {
    const [open, setOpen] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <div>
            <UserResponsiveNavbar
                setOpenSidebar={setOpenSidebar}
                openCommandPalette={open}
                setOpenCommandPalette={setOpen}
            />
            <Navbar openCommandPalette={open} setOpenCommandPalette={setOpen} />
            <ResponsiveSidebar open={openSidebar} setOpen={setOpenSidebar} />
            <div className='grid px-4 py-6 lg:grid-cols-4 lg:gap-8 lg:px-10 lg:py-12'>
                <div className='col-span-1 hidden lg:block'>
                    <Menu />
                </div>
                <div className='lg:col-span-3'>{children}</div>
            </div>
        </div>
    );
}

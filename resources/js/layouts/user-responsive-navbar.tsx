import { CommandPaletteState, PageProps } from '@/types';
import ApplicationLogo from '@/components/application-logo';
import { Link, router, usePage } from '@inertiajs/react';
import { Icon } from '@/components/icon';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { Button } from '@/components/button';
import { Separator } from '@/components/separator';

interface Props extends CommandPaletteState {
    setOpenSidebar: (open: boolean) => void;
}

export default function UserResponsiveNavbar({ openCommandPalette, setOpenCommandPalette, setOpenSidebar }: Props) {
    const { auth } = usePage<PageProps>().props;
    return (
        <nav className='block border-b px-4 py-3 lg:hidden'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <button onClick={() => setOpenSidebar(true)}>
                        <Icon name='IconLayoutSidebarLeftExpand' />
                    </button>
                    <Separator orientation='vertical' className='mx-3 h-7' />
                    <Link href='/'>
                        <ApplicationLogo className='mr-4 h-5 w-auto fill-foreground' />
                    </Link>
                </div>
                <div className='flex items-center gap-x-2'>
                    <button onClick={() => setOpenCommandPalette(true)} className='focus:outline-none'>
                        <Icon name='IconSearch' />
                    </button>
                    <Separator orientation='vertical' className='mx-4 h-7' />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant='ghost'
                                className='grid h-8 w-8 place-content-center border-transparent focus:border'>
                                <Icon name='IconMenu' />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end' className='w-64'>
                            <DropdownMenuItem asChild>
                                <Link href={route('home')}>Home</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href='#'>Articles</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href='#'>About</Link>
                            </DropdownMenuItem>
                            {auth.user ? (
                                <>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href={route('dashboard')}>Dashboard</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={route('profile.edit')}>Settings</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.post(route('logout'))}>
                                        Log out
                                    </DropdownMenuItem>
                                </>
                            ) : (
                                <>
                                    <DropdownMenuItem asChild>
                                        <Link href={route('login')}>Login</Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem asChild>
                                        <Link href={route('register')}>Register</Link>
                                    </DropdownMenuItem>
                                </>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}

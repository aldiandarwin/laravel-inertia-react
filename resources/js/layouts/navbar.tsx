import ApplicationLogo from '@/components/application-logo';
import NavLink from '@/components/nav-link';
import { Link, router, usePage } from '@inertiajs/react';
import { CommandPaletteState, PageProps } from '@/types';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { ThemeToggle } from '@/components/theme-toggle';
import { CommandPalette } from '@/layouts/command-palette';
import { Icon } from '@/components/icon';
import { Button } from '@/components/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';

export default function Navbar({ openCommandPalette, setOpenCommandPalette }: CommandPaletteState) {
    const { auth } = usePage<PageProps>().props;
    return (
        <>
            <CommandPalette openCommandPalette={openCommandPalette} setOpenCommandPalette={setOpenCommandPalette} />
            <nav className='hidden border-b border-border/60 px-4 py-2 sm:px-6 sm:py-3 lg:block'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link href='/'>
                            <ApplicationLogo className='mr-4 h-8 w-auto fill-foreground' />
                        </Link>
                        <NavLink href={route('home')} active={route().current('home')}>
                            Home
                        </NavLink>
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </NavLink>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <button
                            onClick={() => setOpenCommandPalette(true)}
                            className='flex items-center gap-x-4 rounded-lg px-4 py-2 text-muted-foreground ring-1 ring-border hover:text-foreground focus:outline-none'>
                            <Icon name='IconSearch' className='h-4 w-4 stroke-[1.5]' />
                            <span>Quick search...</span>
                            <span className='flex items-center'>
                                <Icon name='IconCommand' className='h-4 w-4 stroke-1' /> K
                            </span>
                        </button>
                        <ThemeToggle />
                        {auth.user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger className='flex items-center justify-between gap-x-4 focus:outline-none'>
                                    {auth.user.name}
                                    <Icon name='IconChevronDown' className='h-4 w-4' />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align='end' className='mt-2 w-72'>
                                    <DropdownMenuLabel>
                                        <div className='flex items-center font-normal'>
                                            <div className='mr-3 shrink-0'>
                                                <Avatar>
                                                    <AvatarImage src={auth.user.avatar} />
                                                    <AvatarFallback>{auth.user.acronym}</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div>
                                                <div>{auth.user.name}</div>
                                                <div className='text-muted-foreground'>{auth.user.email}</div>
                                            </div>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.get(route('dashboard'))}>
                                        Dashboard
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => router.get(route('profile.edit'))}>
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.post(route('logout'))}>
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className='flex gap-x-2'>
                                <Button className='rounded-full' size='sm' variant='secondary' asChild>
                                    <Link href={route('login')}>Login</Link>
                                </Button>
                                <Button className='rounded-full' size='sm' asChild>
                                    <Link href={route('register')}>Register</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

import { useEffect } from 'react';
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/command';
import { router, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Icon } from '@/components/icon';

interface Props {
    openCommandPalette: boolean;
    setOpenCommandPalette: (openCommandPalette: boolean) => void;
}

export function CommandPalette({ openCommandPalette, setOpenCommandPalette }: Props) {
    const { auth } = usePage<PageProps>().props;
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                // @ts-ignore
                setOpenCommandPalette((open) => !open);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    function goto(href: string) {
        router.get(
            href,
            {},
            {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => setOpenCommandPalette(false),
            }
        );
    }

    return (
        <CommandDialog open={openCommandPalette} onOpenChange={setOpenCommandPalette}>
            <CommandInput placeholder='Type a command or search...' />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading='Pages'>
                    <CommandItem value='Home' onSelect={() => goto(route('home'))}>
                        <Icon name='IconHome' />
                        <span>Home</span>
                    </CommandItem>
                    <CommandItem value='tv show' onSelect={() => goto('#')}>
                        <Icon name='IconDeviceTvOld' />
                        <span>TV Show</span>
                    </CommandItem>
                    <CommandItem value='new story' onSelect={() => goto('#')}>
                        <Icon name='IconPlus' />
                        <span>New story</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading='Account'>
                    {auth.user ? (
                        <>
                            <CommandItem value='Dashboard' onSelect={() => goto(route('dashboard'))}>
                                <Icon name='IconChartPie' />
                                <span>Dashboard</span>
                            </CommandItem>
                            <CommandItem value='Settings' onSelect={() => goto(route('profile.edit'))}>
                                <Icon name='IconSettings' />
                                <span>Settings</span>
                            </CommandItem>
                            <CommandItem value='Logout' onSelect={() => router.post(route('logout'))}>
                                <Icon name='IconLogout' />
                                <span>Logout</span>
                            </CommandItem>
                        </>
                    ) : (
                        <>
                            <CommandItem value='login' onSelect={() => goto(route('login'))}>
                                <Icon name='IconLogin' />
                                <span>Login</span>
                            </CommandItem>
                            <CommandItem value='register' onSelect={() => goto(route('register'))}>
                                <Icon name='IconUserCircle' />
                                <span>Register</span>
                            </CommandItem>
                        </>
                    )}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}

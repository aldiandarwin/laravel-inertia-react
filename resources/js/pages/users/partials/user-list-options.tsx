import { User } from '@/types';
import { Button } from '@/components/button';
import { Link, useForm } from '@inertiajs/react';
import { Icon } from '@/components/icon';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { DropdownDialog } from '@/components/dropdown-dialog';

export function UserListOptions({ user }: { user: User }) {
    const { delete: destroy } = useForm();
    function destroyUser(user: User) {
        destroy(route('users.destroy', [user]), {
            preserveScroll: true,
        });
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className='h-7' variant='outline' size='icon'>
                    <Icon name='IconDots' className='h-3.5 w-3.5' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-56'>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href={route('users.show', [user])}>
                        <Icon className='mr-2' name='IconId' />
                        Details
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Icon className='mr-2' name='IconPencil' />
                    Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Icon className='mr-2 h-4 w-4' name='IconShare' />
                        Share
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent className='w-40'>
                            <DropdownMenuItem>
                                <Icon className='mr-2' name='IconBrandFacebook' /> Facebook
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className='mr-2' name='IconBrandTwitter' />
                                Twitter
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className='mr-2' name='IconBrandTelegram' />
                                Telegram
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Icon className='mr-2 h-4 w-4' name='IconSend' />
                        Publish
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent className='w-40'>
                            <DropdownMenuItem>
                                <Icon className='mr-2' name='IconBrandFacebook' />
                                Facebook
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className='mr-2' name='IconBrandTwitter' />
                                Twitter
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className='mr-2' name='IconBrandTelegram' />
                                Telegram
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Icon className='mr-2' name='IconBrandWhatsapp' />
                                Whatsapp
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />

                <DropdownDialog
                    title='You sure about it ?'
                    trigger_text='Ban'
                    description='Are you sure you want to ban this user?'
                    cancel_text='Batal'
                    submit_text='Ban'
                    action={() => console.log('Ban')}
                    icon='IconBan'
                />
                <DropdownDialog
                    trigger_text='Delete Permanently'
                    description='Are you sure you want to ban this user?'
                    action={() => destroyUser(user)}
                    icon='IconTrash'
                />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

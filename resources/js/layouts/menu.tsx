import VerticalNavLink from '@/components/vertical-nav-link';
import { Separator } from '@/components/separator';

export default function Menu() {
    return (
        <ul className='flex flex-col gap-y-1'>
            <VerticalNavLink active={route().current('dashboard')} href={route('dashboard')} icon='IconDashboard'>
                Dashboard
            </VerticalNavLink>
            <VerticalNavLink active={route().current('profile.edit')} href={route('profile.edit')} icon='IconSettings'>
                Settings
            </VerticalNavLink>
            <Separator className='my-2' />
            <VerticalNavLink href={route('users.index')} active={route().current('users.*')} icon='IconUsers'>
                Users
            </VerticalNavLink>
            <VerticalNavLink href={'#'} icon='IconPhoto'>
                Gallery
            </VerticalNavLink>
            <VerticalNavLink href={'#'} icon='IconArticle'>
                Articles
            </VerticalNavLink>
            <VerticalNavLink href={'#'} icon='IconMessage'>
                Comments
            </VerticalNavLink>
            <Separator className='my-2' />
            <VerticalNavLink href={'#'} icon='IconBrandDiscord'>
                Forum
            </VerticalNavLink>
            <VerticalNavLink href={'#'} icon='IconBrandOpenai'>
                Ask AI
            </VerticalNavLink>
        </ul>
    );
}

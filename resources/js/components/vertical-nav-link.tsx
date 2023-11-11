import { InertiaLinkProps, Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import * as icons from '@tabler/icons-react';
import { Icon } from '@/components/icon';

interface Props {
    active?: boolean;
    icon: keyof typeof icons;
}

export default function VerticalNavLink({ icon, active, ...props }: InertiaLinkProps & Props) {
    return (
        <li className='-mx-2'>
            <Link
                className={cn(
                    'flex items-center gap-x-2 rounded-lg px-2 py-2',
                    active
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
                {...props}>
                <Icon name={icon} />
                {props.children}
            </Link>
        </li>
    );
}

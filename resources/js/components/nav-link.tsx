import { InertiaLinkProps, Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';

export default function NavLink({ active = false, ...props }: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            className={cn(
                'px-4 py-2 transition duration-200 hover:text-foreground',
                active ? 'font-semibold text-foreground' : 'text-muted-foreground'
            )}
            {...props}
        />
    );
}

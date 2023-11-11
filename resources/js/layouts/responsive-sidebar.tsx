import { Sheet, SheetContent } from '@/components/sheet';
import Menu from '@/layouts/menu';
import ApplicationLogo from '@/components/application-logo';
import { Link } from '@inertiajs/react';

export default function ResponsiveSidebar({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent className='w-[90%]' side='left'>
                <Link className='mb-8 block' href='/'>
                    <ApplicationLogo className='mr-4 h-8 w-auto fill-foreground' />
                </Link>

                <Menu />
            </SheetContent>
        </Sheet>
    );
}

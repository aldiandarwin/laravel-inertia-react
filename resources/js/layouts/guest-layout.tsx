import ApplicationLogo from '@/components/application-logo';
import { Head, Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { ThemeToggle } from '@/components/theme-toggle';

export default function GuestLayout({
    title,
    children,
}: PropsWithChildren<{
    title: string;
}>) {
    return (
        <>
            <Head title={title} />
            <div className='flex min-h-screen flex-col items-center px-4 pt-6 sm:justify-center sm:pt-0'>
                <div>
                    <Link href='/'>
                        <ApplicationLogo className='h-20 w-20 fill-current text-gray-500' />
                    </Link>
                </div>

                <Card className='mt-6 w-full sm:max-w-md'>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>{children}</CardContent>
                </Card>

                <div className='absolute bottom-0 right-0 mb-4 mr-4 sm:top-0 sm:mt-4'>
                    <ThemeToggle />
                </div>
            </div>
        </>
    );
}

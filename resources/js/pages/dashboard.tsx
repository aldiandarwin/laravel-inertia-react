import React from 'react';
import UserLayout from '@/layouts/user-layout';
import { Head } from '@inertiajs/react';
import SectionTitle from '@/components/section-title';
import { Card } from '@/components/card';

export default function Dashboard() {
    return (
        <>
            <Head title='Dashboard' />
            <Card>
                <SectionTitle title='Dashboard' description='Welcome to your dashboard' />
            </Card>
        </>
    );
}

Dashboard.layout = (page: React.ReactNode) => <UserLayout children={page} />;

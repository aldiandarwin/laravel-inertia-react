import UpdatePasswordForm from '@/pages/profile/partials/update-password-form';
import UpdateProfileInformationForm from '@/pages/profile/partials/update-profile-information-form';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import React from 'react';
import DeleteUserForm from '@/pages/profile/partials/delete-user-form';
import UserLayout from '@/layouts/user-layout';

export default function Edit({ mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <>
            <Head title='Profile' />

            <div className='max-w-2xl space-y-6'>
                <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} />
                <UpdatePasswordForm />
                <DeleteUserForm />
            </div>
        </>
    );
}

Edit.layout = (page: React.ReactNode) => <UserLayout children={page} />;

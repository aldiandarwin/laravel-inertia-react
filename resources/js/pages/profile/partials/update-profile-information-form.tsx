import InputError from '@/components/InputError';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { FormEventHandler } from 'react';
import { PageProps } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card';
import { Label } from '@/components/label';
import { Input } from '@/components/input';
import { Button } from '@/components/button';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
}: {
    mustVerifyEmail: boolean;
    status?: string;
}) {
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Profile Information</CardTitle>

                <CardDescription>Update your account's profile information and email address.</CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={submit} className='space-y-6'>
                    <div className='grid w-full max-w-[14rem] items-center gap-1.5'>
                        <Label htmlFor='picture'>Picture</Label>
                        <Input id='picture' type='file' />
                    </div>
                    <div>
                        <Label htmlFor='name'>Name</Label>
                        <Input
                            id='name'
                            className='mt-1 block w-full'
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            autoComplete='name'
                        />

                        <InputError className='mt-2' message={errors.name} />
                    </div>

                    <div>
                        <Label htmlFor='email'>Email</Label>

                        <Input
                            id='email'
                            type='email'
                            className='mt-1 block w-full'
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete='username'
                        />

                        <InputError className='mt-2' message={errors.email} />
                    </div>

                    {mustVerifyEmail && user.email_verified_at === null && (
                        <div>
                            <p className='mt-2 text-sm text-primary'>
                                Your email address is unverified.
                                <Link
                                    href={route('verification.send')}
                                    method='post'
                                    as='button'
                                    className='rounded-md text-sm text-muted-foreground underline hover:text-primary'>
                                    Click here to re-send the verification email.
                                </Link>
                            </p>

                            {status === 'verification-link-sent' && (
                                <div className='mt-2 text-sm font-medium text-green-600'>
                                    A new verification link has been sent to your email address.
                                </div>
                            )}
                        </div>
                    )}

                    <div className='flex items-center gap-4'>
                        <Button disabled={processing}>Save</Button>

                        <Transition
                            show={recentlySuccessful}
                            enterFrom='opacity-0'
                            leaveTo='opacity-0'
                            className='transition ease-in-out'>
                            <p className='text-sm text-muted-foreground'>Saved.</p>
                        </Transition>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

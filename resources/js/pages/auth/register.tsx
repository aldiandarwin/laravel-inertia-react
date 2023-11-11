import React, { FormEventHandler, useEffect } from 'react';
import GuestLayout from '@/layouts/guest-layout';
import InputError from '@/components/InputError';
import { Link, useForm } from '@inertiajs/react';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Button } from '@/components/button';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
            <form onSubmit={submit}>
                <div>
                    <Label htmlFor='name'>Name</Label>

                    <Input
                        id='name'
                        name='name'
                        value={data.name}
                        className='mt-1 block w-full'
                        autoComplete='name'
                        autoFocus
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className='mt-2' />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='email'>Email</Label>

                    <Input
                        id='email'
                        type='email'
                        name='email'
                        value={data.email}
                        className='mt-1 block w-full'
                        autoComplete='username'
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className='mt-2' />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='password'>Password</Label>

                    <Input
                        id='password'
                        type='password'
                        name='password'
                        value={data.password}
                        className='mt-1 block w-full'
                        autoComplete='new-password'
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className='mt-2' />
                </div>

                <div className='mt-4'>
                    <Label htmlFor='password_confirmation'>Confirm Password</Label>

                    <Input
                        id='password_confirmation'
                        type='password'
                        name='password_confirmation'
                        value={data.password_confirmation}
                        className='mt-1 block w-full'
                        autoComplete='new-password'
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className='mt-2' />
                </div>

                <div className='mt-4 flex items-center justify-end'>
                    <Link href={route('login')} className='text-muted-foreground hover:text-foreground'>
                        Already registered?
                    </Link>

                    <Button className='ml-4' disabled={processing}>
                        Register
                    </Button>
                </div>
            </form>
        </>
    );
}

Register.layout = (page: React.ReactNode) => <GuestLayout title='Register' children={page} />;

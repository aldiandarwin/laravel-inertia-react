import { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
    return <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>{children}</div>;
}

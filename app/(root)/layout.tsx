import Header from '@/components/Header';
import React, { ReactNode } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "awesohame",
    description: "Welcome to my Portfolio!",
    icons: {
        icon: "/next.svg",
    }
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='relative'>
            <Header />
            <div className='flex'>
                {children}
            </div>
        </main>
    )
}

export default HomeLayout 
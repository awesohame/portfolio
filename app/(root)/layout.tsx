import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React, { ReactNode } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "awesohame",
    description: "awesohame's personal website",
    icons: {
        icon: "/assets/icon.png",
    }
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='relative'>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default HomeLayout 
import React, { ReactNode } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "awesohame",
    description: "Welcome to my Portfolio!",
    icons: {
        icon: "/next.svg",
    }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex h-[calc(100vh-8.5rem)] w-full'>
            {children}
        </div>
    )
}

export default RootLayout 
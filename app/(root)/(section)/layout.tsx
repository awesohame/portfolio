import React, { ReactNode } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "awesohame",
    description: "awesohame's personal website",
    icons: {
        icon: "/assets/icon.png",
    }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex xl:h-[calc(100vh-8.5rem)] w-full'>
            {children}
        </div>
    )
}

export default RootLayout 
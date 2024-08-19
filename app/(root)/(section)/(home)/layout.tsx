import React, { ReactNode } from 'react'
import { Metadata } from 'next';
import HomeProjects from '@/components/HomeProjects';

export const metadata: Metadata = {
    title: "awesohame",
    description: "awesohame's personal website",
    icons: {
        icon: "/assets/icon.png",
    }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className='flex xl:h-[calc(100vh-8.25rem)] w-full'>
                {children}
            </div>

            <div className='gap-8 w-full flex flex-col justify-center'>
                <HomeProjects />
            </div>
        </>
    )
}

export default RootLayout 
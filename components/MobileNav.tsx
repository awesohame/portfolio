'use client';

import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-primary-1' />
            </SheetTrigger>
            <SheetContent className='flex flex-col backdrop-blur-sm bg-opacity-80 bg-dark-1'>
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <SheetClose asChild>
                        <Link href='/'>
                            <h1 className='text-4xl text-primary-1 font-semibold'>
                                awesohame
                            </h1>
                        </Link>
                    </SheetClose>
                </div>

                <nav className='flex flex-col justify-center items-center gap-8'>
                    {navLinks.map((link, idx) => {
                        return (
                            <SheetClose asChild key={idx}>
                                <Link
                                    href={link.path}
                                    className={cn(
                                        {
                                            "text-light-2": link.path !== pathname,
                                            "text-primary-1": link.path === pathname
                                        },
                                        `text-xl hover:text-light-1 transition-all`
                                    )}
                                >
                                    {link.name}
                                </Link>
                            </SheetClose>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
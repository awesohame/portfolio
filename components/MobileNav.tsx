'use client';

import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

import { navLinks } from '@/constants';

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-primary-1' />
            </SheetTrigger>
            <SheetContent className='flex flex-col backdrop-blur-sm bg-opacity-80 bg-dark-2'>
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <SheetClose asChild>
                        <Link href='/'>
                            <h1 className='text-4xl text-primary-1 font-semibold'>
                                SA
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
                                    className={`${link.path === pathname &&
                                        'text-primary-1 border-b-2 border-primary-1'
                                        } text-xl hover:text-primary-1 transition-all`}
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
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className='flex gap-8'>
            {navLinks.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        // className={`${link.path === pathname && 'text-primary-1 border-b-2 border-primary-1'
                        //     } font-medium hover:text-accent-2 text-2xl text-light-2`}
                        className={cn(
                            "font-medium hover:text-accent-2 text-xl",
                            {
                                "text-accent-1": link.path !== pathname,
                                "text-accent-2": link.path === pathname
                            }
                        )}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;
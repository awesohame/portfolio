'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/constants';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className='flex gap-8'>
            {navLinks.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname && 'text-primary-1 border-b-2 border-primary-1'
                            } font-medium hover:text-primary-1 transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;
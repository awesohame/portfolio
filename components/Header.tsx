import Link from "next/link";

import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="xl:px-8 py-8 xl:py-12">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-3xl text-primary-1 font-bold">
                        awesohame
                    </h1>
                </Link>

                <div className="hidden xl:flex items-center gap-8">
                    <Navbar />
                </div>

                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
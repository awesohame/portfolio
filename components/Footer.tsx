import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const contacts = [
    {
        icon: <SiLeetcode />,
        link: 'https://leetcode.com/u/awesohame/',
    },
    {
        icon: <SiCodeforces />,
        link: 'https://codeforces.com/profile/awesohame',
    },
    {
        icon: <FaXTwitter />,
        link: 'https://x.com/awesohame',
    },
    {
        icon: <FaLinkedin />,
        link: 'https://linkedin.com/in/sohamaversekar',
    },
    {
        icon: <FaInstagram />,
        link: 'https://instagram.com/awesohame',
    },
    {
        icon: <CiMail />,
        link: 'mailto:sohamaversekar777@gmail.com',
    },

]

const Footer = () => {
    return (
        <footer className="bg-dark-1 text-light-1 font-extralight py-6 text-sm mt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center xl:text-left">
                        <h5 className="font-semibold">Soham Aversekar</h5>
                        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                    <div className="flex w-full xl:w-auto space-x-8 text-2xl xl:text-3xl justify-evenly xl:justify-end">
                        {contacts.map((contact, idx) => (
                            <Link
                                key={idx}
                                href={contact.link}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-accent-2 transition-all duration-200"
                            >
                                {contact.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

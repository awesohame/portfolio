import { ContactForm } from "@/components/ContactForm"
import { IoLogoGithub } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const contacts = [
    {
        icon: <IoLogoGithub />,
        link: 'https://github.com/awesohame',
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

const Contact = () => {
    return (
        <div className='flex h-[calc(100vh-8.5rem)] w-full xl:px-24 flex-wrap xl:flex-nowrap'>
            <div className="xl:w-1/2 w-full p-4 xl:p-10">
                <ContactForm />
            </div>
            <div className="xl:w-1/2 w-full xl:p-10 h-fit flex flex-wrap justify-center text-5xl xl:text-9xl mt-20 xl:mt-0">
                <p className="text-3xl xl:text-5xl h-16 xl:h-auto">Connect with me</p>
                <div className="flex xl:flex-wrap justify-center items-center w-full gap-2 px-20 mb-10 xl:gap-0 xl:mb-0 xl:p-[20%] xl:pt-[10%]">
                    {contacts.map((contact, idx) => (
                        <Link
                            key={idx}
                            href={contact.link}
                            target="_blank"
                            rel="noreferrer"
                            className="w-1/2 p-2 flex justify-center items-center hover:text-primary-1 transition-all duration-200"
                        >
                            {contact.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contact
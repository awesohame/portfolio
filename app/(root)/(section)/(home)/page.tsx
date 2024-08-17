import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineContactPage } from "react-icons/md";

export default function Home() {
    return (
        <section className="h-full w-full flex xl:pb-[3rem] flex-col">
            <div className="xl:h-[80%] w-full flex flex-col-reverse items-center xl:flex-row p-[6%] xl:px-[15%]">
                <div className="xl:w-[60%] h-full text-4xl xl:text-5xl gap-5 flex flex-col justify-center mt-5 font-medium">
                    Hello!
                    <span className="text-3xl xl:text-4xl">
                        I&apos;m <span className="text-primary-1 font-semibold">Soham Aversekar</span>
                    </span>
                    <span className="text-lg xl:text-xl text-light-1 font-normal">
                        I am a full stack developer based in Mumbai, India, currently in my third year of BE in Computer Engineering at Thadomal Shahani Engineering College. Committed to creating user-friendly websites, I am continuously expanding my technical knowledge.
                    </span>
                </div>
                <div className="xl:w-[40%] flex items-center justify-end">
                    <Image
                        src="/assets/hero.png"
                        alt="hero"
                        height={300}
                        width={300}
                        className="hidden xl:block rounded-[30%]"
                    />
                    <Image
                        src="/assets/hero.png"
                        alt="hero"
                        height={200}
                        width={200}
                        className="xl:hidden rounded-[30%]"
                    />
                </div>
            </div>
            <div className="h-[20%] w-full flex items-center justify-center gap-4">
                <Link href="https://github.com/awesohame" className="flex items-center bg-light-1 gap-2 text-dark-1 py-3 px-4 rounded-lg hover:bg-accent-2">
                    <IoLogoGithub size={30} />
                    <span className="text-lg xl:text-2xl">Github</span>
                </Link>
                <Link href="/resume.pdf" className="flex items-center bg-light-1 gap-2 text-black py-3 px-4 rounded-lg  hover:bg-accent-2">
                    <MdOutlineContactPage size={30} />
                    <span className="text-lg xl:text-2xl">Resume</span>
                </Link>
            </div>
        </section>
    );
}
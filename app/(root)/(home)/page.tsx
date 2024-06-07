import Image from "next/image";
import './page.css';
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <section className="h-full flex xl:pb-[3rem]">
            {/* <section className="flex flex-col justify-between w-full h-full overflow-x-hidden overflow-y-hidden"> */}
            <div className="flex flex-col justify-between w-full">
                <div className="flex justify-center mt-16 h-3/5">
                    <div className="flex justify-center xl:justify-between items-center w-4/5 flex-wrap-reverse xl:flex-nowrap">
                        <span
                            className="text-4xl text-center pt-6 xl:pt-0 xl:text-left xl:text-7xl text-light-1 font-bold"
                        >
                            I create <span className="rainbow">playful</span> experiences
                        </span>
                        <div className="w-[240px] xl:w-[325px]">
                            <Image
                                src="/assets/borderpfp.png"
                                alt="pfp"
                                width={325}
                                height={325}
                                priority
                                quality={100}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10 h-1/5">
                    <div
                        className="text-2xl/[2rem] xl:text-4xl/[3rem] text-light-1 font-bold flex flex-col xl:flex-row"
                    >
                        <p className='px-2 h-8 xl:h-12 text-primary-1 text-center'>
                            Soham Aversekar
                        </p>
                        <div className='px-2 h-8 xl:h-12 overflow-hidden text-center xl:text-left my-2 xl:my-0'>
                            <span className='relative rotate-text'>
                                Student
                                <br /> MERN Stack Developer
                                <br /> AIML Enthusiast
                                <br /> Student
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
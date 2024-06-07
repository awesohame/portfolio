import Image from "next/image";

export default function Home() {
    return (
        <section className="h-full w-full flex xl:pb-[3rem]">
            {/* <section className="flex flex-col justify-between w-full h-full overflow-x-hidden overflow-y-hidden"> */}
            <div className="flex flex-col justify-between h-full w-full px-4 xl:px-24">
                <div className="flex justify-center mt-16 h-3/5">
                    <div className="flex justify-center xl:justify-between items-center w-4/5 flex-wrap-reverse xl:flex-nowrap">
                        <span
                            className="text-6xl text-center pt-6 xl:pt-0 xl:text-left xl:text-7xl text-light-1 flex flex-col"
                        >
                            Hello I'm
                            <span className="text-primary-1">Soham</span>
                        </span>
                        <div className="w-[240px] xl:w-[300px]">
                            <Image
                                src="/assets/borderpfp.png"
                                alt="pfp"
                                width={300}
                                height={300}
                                priority
                                quality={100}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-0 xl:mt-16 h-1/5">
                    <div
                        className="text-2xl xl:text-3xl text-light-1 flex flex-col xl:flex-row"
                    >
                        <p className='px-2 h-8 xl:h-12 text-light-1 text-center'>
                            A passionate software developer with a keen interest in AI/ML.
                        </p>
                        {/* <div className='px-2 h-8 xl:h-12 overflow-hidden text-center xl:text-left my-2 xl:my-0'>
                            <span className='relative rotate-text'>
                                Student
                                <br /> MERN Stack Developer
                                <br /> AIML Enthusiast
                                <br /> Student
                            </span>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    );
}
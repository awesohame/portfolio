import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaNodeJs, FaPython, } from "react-icons/fa";
import { SiJavascript, SiRedux, SiExpress, SiMongodb, SiPostman, SiCloudinary, SiTypescript, SiCplusplus, SiScikitlearn, SiJupyter } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

const skills = {
    frontend: [
        {
            name: 'HTML5',
            icon: <FaHtml5 />,
            proficiency: 5,
        },
        {
            name: 'CSS3',
            icon: <FaCss3 />,
            proficiency: 5,
        },
        {
            name: 'JavaScript',
            icon: <SiJavascript />,
            proficiency: 5,
        },
        {
            name: 'React',
            icon: <FaReact />,
            proficiency: 5,
        },
        {
            name: 'Redux',
            icon: <SiRedux />,
            proficiency: 4,
        },
        {
            name: 'Tailwind CSS',
            icon: <RiTailwindCssFill />,
            proficiency: 5,
        },
        {
            name: 'Bootstrap',
            icon: <FaBootstrap />,
            proficiency: 2,
        },
        {
            name: 'Next.js',
            icon: <RiNextjsFill />,
            proficiency: 4,
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: <FaNodeJs />,
            proficiency: 5,
        },
        {
            name: 'Express',
            icon: <SiExpress />,
            proficiency: 5,
        },
        {
            name: 'MongoDB',
            icon: <SiMongodb />,
            proficiency: 5,
        },
        {
            name: 'MySQL',
            icon: <GrMysql />,
            proficiency: 3,
        },
        {
            name: 'Postman',
            icon: <SiPostman />,
            proficiency: 4,
        },
    ],
    others: [
        {
            name: 'TypeScript',
            icon: <SiTypescript />,
            proficiency: 3,
        },
        {
            name: 'C++',
            icon: <SiCplusplus />,
            proficiency: 4,
        },
        {
            name: 'Python',
            icon: <FaPython />,
            proficiency: 4,
        },
        {
            name: 'Scikit-learn',
            icon: <SiScikitlearn />,
            proficiency: 2
        },
    ],
}

const Skills = () => {
    return (
        <section className="h-full w-full flex items-center xl:pb-[3rem] xl:px-24">
            <Tabs
                defaultValue="Frontend"
                className="flex flex-col xl:flex-row h-full w-full"
            >
                <TabsList className="flex flex-col h-full gap-6  justify-center w-full xl:max-w-[280px] xl:max-h-full max-h-[250px] pb-4 xl:pb-0 px-4 xl:px-0 xl:pr-10 rounded-none">
                    <TabsTrigger value="Frontend" className="w-full text-xl xl:text-2xl bg-dark-2 px-4 py-3 rounded-xl">
                        Frontend
                    </TabsTrigger>
                    <TabsTrigger value="Backend" className="w-full text-xl xl:text-2xl bg-dark-2 px-4 py-3 rounded-xl">
                        Backend
                    </TabsTrigger>
                    <TabsTrigger value="Others" className="w-full text-xl xl:text-2xl bg-dark-2 px-4 py-3 rounded-xl">
                        Others
                    </TabsTrigger>
                </TabsList>
                {/* <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="Frontend">Experience</TabsTrigger>
                        <TabsTrigger value="Backend">Education</TabsTrigger>
                        <TabsTrigger value="Others">Skills</TabsTrigger>
                    </TabsList> */}
                <div className="w-full xl:pl-10 flex items-center">
                    <TabsContent value="Frontend">
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {
                                skills.frontend.map((skill, idx) => {
                                    return (
                                        <TooltipProvider key={idx} delayDuration={100}>
                                            <Tooltip>
                                                <div className="xl:w-[200px] xl:h-[200px] w-[150px] h-[150px] bg-dark-2 rounded-2xl flex justify-center items-center group">
                                                    <TooltipTrigger className="text-8xl group-hover:text-accent-2 transition-all duration-300 cursor-default">
                                                        {skill.icon}
                                                    </TooltipTrigger>
                                                </div>
                                                <TooltipContent>
                                                    <p className="text-dark-1 bg-accent-1 px-4 py-3 rounded-lg">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    )
                                })
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="Backend">
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {
                                skills.backend.map((skill, idx) => {
                                    return (
                                        <TooltipProvider key={idx} delayDuration={100}>
                                            <Tooltip>
                                                <div className="xl:w-[200px] xl:h-[200px] w-[150px] h-[150px] bg-dark-2 rounded-2xl flex justify-center items-center group">
                                                    <TooltipTrigger className="text-8xl group-hover:text-accent-2 transition-all duration-300 cursor-default">
                                                        {skill.icon}
                                                    </TooltipTrigger>
                                                </div>
                                                <TooltipContent>
                                                    <p className="text-dark-1 bg-accent-1 px-4 py-3 rounded-lg">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    )
                                })
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="Others">
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {
                                skills.others.map((skill, idx) => {
                                    return (
                                        <TooltipProvider key={idx} delayDuration={100}>
                                            <Tooltip>
                                                <div className=" w-[150px] h-[150px] xl:w-[200px] xl:h-[200px] bg-dark-2 rounded-2xl flex justify-center items-center group">
                                                    <TooltipTrigger className="text-8xl group-hover:text-accent-2 transition-all duration-300 cursor-default">
                                                        {skill.icon}
                                                    </TooltipTrigger>
                                                </div>
                                                <TooltipContent>
                                                    <p className="text-dark-1 bg-accent-1 px-4 py-3 rounded-lg">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    )
                                })
                            }
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </section>
    )
}

export default Skills
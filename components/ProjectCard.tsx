import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { IoLogoGithub } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { CiCircleInfo } from "react-icons/ci";

import Image from "next/image"
import Link from "next/link";
import { Project } from '@/constants';

const ProjectCard = ({
    project,
    idx,
}: {
    project: Project,
    idx: number
}) => {
    return (
        <Card key={idx} className="xl:w-[500px] flex flex-col">
            <CardHeader>
                <Image
                    src={project.img}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="rounded-t-lg"
                />
            </CardHeader>
            <CardContent className="my-6 xl:flex-grow">
                <CardTitle className="text-2xl text-light-1">{project.name}</CardTitle>
                <CardDescription className="m-4 text-lg text-accent-2">{project.desc}</CardDescription>
                <div className="flex flex-wrap">
                    {
                        project.tags.map((tag, idx) => {
                            return (
                                <span key={idx} className="text-dark-1 bg-light-1 px-2 py-1 rounded-lg m-1">{tag}</span>
                            )
                        })
                    }
                </div>
            </CardContent>
            <CardFooter className="flex xl:mt-auto">
                <TooltipProvider key={idx} delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger className="xl:mx-3 rounded-2xl flex justify-center items-center group">
                            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex gap-1 px-4 py-3 rounded-lg items-center justify-center bg-dark-1">
                                <div className="flex items-center justify-center text-2xl xl:text-3xl">
                                    <IoLogoGithub />
                                </div>
                                <div className="flex items-center justify-center text-lg xl:text-xl">
                                    Github
                                </div>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className="bg-light-2 text-dark-1 px-4 py-3">
                            <p>View Code</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                {project.demo && (
                    <TooltipProvider key={idx} delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger className="xl:mx-3 rounded-2xl flex justify-center items-center group">
                                <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="flex gap-1 px-4 py-3 rounded-lg items-center justify-center bg-dark-1">
                                    <div className="flex items-center justify-center text-2xl xl:text-3xl">
                                        <FiExternalLink />
                                    </div>
                                    <div className="flex items-center justify-center text-lg xl:text-xl">
                                        Visit Site
                                    </div>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="text-dark-2 bg-light-2 px-4 py-3">
                                <span className="flex items-center">
                                    <span className="text-xl text-dark-2 pr-1">
                                        <CiCircleInfo />
                                    </span>
                                    Please note that some project links may be temporarily unavailable.
                                </span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
            </CardFooter>
        </Card>
    )
}

export default ProjectCard
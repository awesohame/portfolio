import React from 'react'
import { projects } from '@/constants'

import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { IoLogoGithub } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";

import Image from "next/image"
import Link from "next/link";

const projectHeads = projects.slice(0, 2);

const HomeProjects = () => {
    return (
        <div className='h-auto xl:px-28 p-[6%] py-14 xl:py-24 flex flex-col justify-between gap-8 items-center xl:items-start'>
            <h3 className='font-bold text-primary-1 text-3xl'>Project Showcase</h3>
            <section className="w-full flex h-auto">
                <div className="w-full h-auto flex flex-wrap xl:flex-nowrap xl:gap-8 gap-4 justify-center">
                    {
                        projectHeads.map((project, idx) => {
                            return (
                                <Card key={idx} className="xl:w-[600px] flex flex-col relative rounded-lg overflow-hidden shadow-lg">
                                    {/* Darkened Image Background */}
                                    <div className="relative">
                                        <Image
                                            src={project.img}
                                            alt={project.name}
                                            width={600}
                                            height={360}
                                            className="rounded-t-lg brightness-[.3]" // Darkening the image
                                        />
                                    </div>

                                    {/* Overlaying Card Content */}
                                    <div className="absolute inset-0 flex flex-col xl:p-6 p-2 justify-between text-white">
                                        <CardContent className="xl:px-6 px-2 py-0 xl:flex-grow flex flex-col justify-between h-full">
                                            <CardTitle className="xl:text-2xl text-xl">{project.name}</CardTitle>
                                            <CardDescription className="xl:m-4 m-1 xl:text-base text-xs">{project.desc}</CardDescription>
                                            <div className="flex-wrap xl:flex hidden">
                                                {project.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-white text-dark-1 xl:px-2 xl:py-1 px-2 py-[0.15rem] xl:text-base text-sm rounded-lg m-1 opacity-75"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex mt-auto bg-opacity-75 rounded-b-lg gap-3">
                                                <TooltipProvider key={idx} delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="rounded-2xl flex justify-center items-center group">
                                                            <Link
                                                                href={project.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex gap-1 xl:px-4 px-2 xl:py-3 py-2 rounded-lg items-center justify-center bg-light-1 text-dark-1 hover:brightness-75"
                                                            >
                                                                <div className="flex items-center justify-center text-xl xl:text-3xl">
                                                                    <IoLogoGithub />
                                                                </div>
                                                                <div className="flex items-center justify-center text-sm xl:text-base">
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
                                                            <TooltipTrigger className="rounded-2xl flex justify-center items-center group">
                                                                <Link
                                                                    href={project.demo}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex gap-1 xl:px-4 px-2 xl:py-3 py-2 rounded-lg items-center justify-center bg-light-1 text-dark-1 hover:brightness-75"
                                                                >
                                                                    <div className="flex items-center justify-center text-xl xl:text-3xl">
                                                                        <FiExternalLink />
                                                                    </div>
                                                                    <div className="flex items-center justify-center text-sm xl:text-base">
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
                                            </div>
                                        </CardContent>
                                    </div>

                                    {/* <CardFooter className="flex xl:mt-auto bg-opacity-75 bg-dark-1 p-4 rounded-b-lg">
                                        
                                    </CardFooter> */}
                                </Card>
                            )
                        })
                    }
                </div>
            </section>
            <div className='flex items-center'>
                <Link href='/projects' className='bg-primary-1 px-4 py-3 rounded-lg text-dark-1 hover:opacity-80 h-full'>
                    <span className='text-dark-1 mr-2'>View More Projects</span>
                    <IoIosArrowRoundForward className='inline-block text-dark-1 text-2xl' />
                </Link>
            </div>
        </div>
    )
}

export default HomeProjects
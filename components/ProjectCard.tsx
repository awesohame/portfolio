'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github, Info } from "lucide-react";
import { Project } from '@/constants';

const ProjectCard = ({ project }: { project: Project }) => {
    const [showImageModal, setShowImageModal] = useState(false);
    const modalDescriptionId = `project-modal-description-${project.name.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <>
            <Card
                className="group overflow-hidden transition-all duration-300 hover:shadow-md w-full max-w-sm bg-dark-2/60 border-accent-1/20 text-light-1 flex flex-col cursor-pointer"
                onClick={() => setShowImageModal(true)}
            >
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={project.img}
                        alt={project.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 384px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority // Added priority for LCP image
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-1/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="flex-grow pt-4">
                    <h3 className="text-xl font-medium text-primary-1 mb-2">{project.name}</h3>
                    <p className="text-light-2 text-sm mb-4 line-clamp-3">{project.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-0.5 text-xs rounded-full bg-accent-1/10 text-primary-1 font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </CardContent>

                <CardFooter className="mt-auto flex justify-start gap-3 pt-0 pb-4">
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md bg-dark-2 hover:bg-accent-1 text-light-1 transition-colors"
                                    onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking links
                                >
                                    <Github size={16} />
                                    <span>Code</span>
                                </a>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" className="bg-light-1 text-dark-1">
                                <p>View Source Code</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    {project.demo && (
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md bg-primary-1 text-dark-1 hover:bg-primary-1/80 transition-colors"
                                        onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking links
                                    >
                                        <ExternalLink size={16} />
                                        <span>Live Demo</span>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent side="bottom" className="bg-light-1 text-dark-1 flex items-center gap-1.5 max-w-xs">
                                    <Info size={14} />
                                    <p className="text-xs">Some demos may be temporarily unavailable</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                </CardFooter>
            </Card>

            {/* Image Modal */}
            <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
                <DialogContent className="bg-dark-1 border border-accent-1/20 p-0 max-w-3xl">
                    <DialogTitle className="hidden">Project Image</DialogTitle>
                    {/* Added DialogDescription component for proper accessibility */}
                    <DialogDescription id={modalDescriptionId} className="sr-only hidden">
                        Detailed view of project {project.name}: {project.desc}
                    </DialogDescription>
                    <div className="relative w-full h-96 overflow-hidden">
                        <Image
                            src={project.img}
                            alt={project.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 768px"
                            className="object-contain"
                            priority
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-dark-1/80 p-4">
                            <h3 className="text-xl font-semibold text-primary-1">{project.name}</h3>
                            <p className="text-light-2">{project.desc}</p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ProjectCard;
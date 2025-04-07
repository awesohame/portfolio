

import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/constants"

const Projects = () => {
    return (
        <div className='flex w-full'>
            <section className="w-full flex xl:pb-[3rem] xl:px-24">
                <div className="w-full flex flex-wrap xl:gap-12 gap-8 justify-center m-4">
                    {
                        projects.map((project, idx) => {
                            return (
                                <ProjectCard key={idx} project={project} />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Projects
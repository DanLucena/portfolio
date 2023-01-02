import { ProjectCard, ProjectCardProps } from "../../molecules/ProjectCard";

interface ProjectsContainerProps {
  projects: ProjectCardProps[];
}

export function ProjectsContainer({projects}: ProjectsContainerProps) {
  return (
    <div className='w-full'>
      <h1 className='text-2xl mb-8' id="Projects">
        <span className='text-violet-400'>03. </span>
        Projects
      </h1>
      <div className='w-full'>
        <div className='justify-center 2xl:justify-start flex-row flex w-[96%] gap-3 flex-wrap mx-auto'>
          {
            projects.map((item, index) => {
              return <ProjectCard key={index} description={item.description} title={item.title} projectStack={item.projectStack}/>
            })
          }
        </div>
      </div>
    </div>
  );
}
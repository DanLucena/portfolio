import { ExperienceStack } from "../../atoms/ExperienceStack";
import { FiGithub } from 'react-icons/fi';
import { BiCode } from 'react-icons/bi';

export interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  projectStack: string[];
}

export function ProjectCard({title, description, projectStack, link}:ProjectCardProps) {
  return (
    <div className='max-w-xs h-80 rounded border-2 dark:border-neutral-500 p-5 dark:bg-neutral-800'>
      <div className='h-full flex flex-col'>
        <div className='flex items-center w-full justify-between'>
          <BiCode size='2.5rem' />
          <a href={link} target="_blank"><FiGithub className="cursor-pointer" size="1.5rem" color="#A78BFA" id='github' /></a>
        </div>
        <div className='mb-auto'>
          <h1 className='font-medium text-xl mt-4'>{title}</h1>
          <p className='mt-4 text-neutral-600 dark:text-neutral-400 font-light'>{description}</p>
        </div>
        <ExperienceStack stack={projectStack} />
      </div>
    </div>
  );
}
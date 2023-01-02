import { coursesExperiences } from '../../lib/helpers/coursesExperiences';
import { ExperienceContainer } from '../organisms/ExperienceContainer';
import { workExperiences } from '../../lib/helpers/workExperiences';
import { projects } from '../../lib/helpers/projects';
import { ProjectsContainer } from '../organisms/ProjectsContainer';
import { HomeContainer } from '../organisms/HomeContainer';
import { AboutSection } from '../molecules/AboutSection';
import { ScrollUpButton } from '../atoms/ScrollUpButton';

export function HomeTemplate() {
  return (
    <>
      <div className="w-full min-h-screen bg-neutral-100 dark:bg-neutral-900 flex flex-col">
        <HomeContainer />
      </div>
      <div className="w-full min-h-screen bg-neutral-100 dark:bg-neutral-900 flex flex-col">
        <AboutSection />
        <div className="max-w-[89.25rem] 2xl:w-9/12 w-11/12 mx-auto flex sm:pl-12 pl-[10px] mt-72">
          <div className='w-full'>
            <h1 className='text-2xl mb-8' id="Experience">
              <span className='text-violet-400'>02. </span>
              Experiences
            </h1>
            <div className='lg:flex-row flex w-full gap-x-20 flex-col'>
              <ExperienceContainer title='Work Experiences' experienceCards={workExperiences} />
              <ExperienceContainer title='Courses & Academic' experienceCards={coursesExperiences} />
            </div>
          </div>
        </div>
        <div className="max-w-[89.25rem] 2xl:w-9/12 w-11/12 mx-auto flex sm:pl-12 pl-[10px] mt-44">
          <ProjectsContainer projects={projects} />
        </div>
        <div className='max-w-[89.25rem] 2xl:w-9/12 w-11/12 mx-auto flex flex-col sm:pl-12 pl-[10px] mt-72 items-center'>
          <p className='mb-2 text-neutral-500 dark:text-neutral-400'>Did i get your attention?!</p>
          <h1 className='sm:text-5xl text-4xl font-semibold text-center'>Get in Touch</h1>
          <p className='max-w-[40rem] text-center mt-8 text-neutral-600 dark:text-neutral-400'>I&apos;m currently working and not looking for any new opportunities, but I&apos;m open for freelances and small projects.</p>
          <button className='border-2 rounded mt-8 px-8 py-3 hover:bg-violet-400 hover:border-violet-400 ease-in duration-200 hover:text-white'>Send a Mail</button>
        </div>
        <div className='w-full flex justify-center mt-72 mb-4'>
          <p className='font-light text-sm text-center'>© 2023 Copyright <br />Build with ❤️ by Daniel Lucena</p>
        </div>
      </div>
      <ScrollUpButton />
    </>
  );
}
import { ExperienceContainer } from '../organisms/ExperienceContainer';
import { workExperiences } from '../../lib/helpers/workExperiences';
import { coursesExperiences } from '../../lib/helpers/coursesExperiences';
import { AboutSection } from '../molecules/AboutSection';
import { HomeContainer } from '../organisms/HomeContainer';

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
            <h1 className='text-2xl mb-8'>
              <span className='text-violet-400'>02. </span>
              Experiences
            </h1>
            <div className='lg:flex-row flex w-full gap-x-20 flex-col'>
              <ExperienceContainer title='Work Experiences' experienceCards={workExperiences} />
              <ExperienceContainer title='Courses & Academic' experienceCards={coursesExperiences} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
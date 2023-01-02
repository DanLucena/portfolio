import { TechList } from "../../atoms/TechList";
import Image from 'next/image';

export function AboutSection() {
  const technologies = ['Javascript', 'Typescript', 'VueJS', 'Rails', 'NodeJS', 'Typescript'];

  return (
    <div className="max-w-[89.25rem] 2xl:w-9/12 w-11/12 mx-auto flex sm:pl-12 pl-[10px]">
      <div className='lg:w-7/12 w-11/12'>
        <h1 className='text-2xl mb-8'>
          <span className='text-violet-400' id="About">01. </span>
          About Me
        </h1>
        <p className='mb-4 text-neutral-600 dark:text-neutral-400'>Hi! My name is Daniel and I love to code and solve problems, I started to like programming when I was 9 years old and I watched my cousin working with web development, since then I started looking for more about the subject and today I&apos;m studying <span className='text-violet-400'>Computer Cience</span>.</p>
        <p className='mb-4 text-neutral-600 dark:text-neutral-400'>I have more knowledge in the area of <span className='text-violet-400'>Web Development</span>, both in the frontend and in the backend. However, I seek to venture into other areas and technology in order to expand my knowledge. I have a big love for <span className='text-violet-400'>low-level programming</span>, but I still don&apos;t have any professional experience in the area.</p>
        <p className='text-neutral-600 dark:text-neutral-400'>Stack that I&apos;m working with recently: </p>
        <TechList technologies={technologies} />
      </div>
      <div className="ml-auto w-80 h-80 bg-violet-400 lg:block hidden relative rounded-b-lg">
        <Image className="absolute xl:right-28 right-20 rounded-lg" src="/image2.jpeg" width={280} height={30} alt='photo' />
      </div>
    </div>
  );
}
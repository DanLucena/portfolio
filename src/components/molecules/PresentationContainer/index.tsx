import { SocialMediaIcons } from "../../atoms/SocialMediaIcons";

export function PresentationContainer() {
  return (
    <>
      <div className="max-w-[89.25rem] 2xl:w-9/12 w-11/12 mx-auto sm:px-12 px-[10px] my-auto">
        <span className="text-violet-400 font-medium text-lg mb-4 flex">Hi, my name is</span>
        <h1 className="lg:text-8xl text-6xl font-semibold">Daniel Lucena.</h1>
        <h1 className="lg:text-7xl text-4xl flex mb-8">I am a full-stack developer.</h1>
        <p className="text-neutral-600 dark:text-neutral-400">I am a software developer that are focused on performance<br /> and maintainability. Now focusing on learn frontend best practices<br /> and architectures.</p>
        <SocialMediaIcons />
      </div>
      <div className="max-w-[89.25rem] 2xl:w-9/12 w-11/12 mx-auto flex">
        <div className="ml-auto lg:block hidden w-80 h-20 rounded-t-lg bg-violet-400">
        </div>
      </div>
    </>
  );
}
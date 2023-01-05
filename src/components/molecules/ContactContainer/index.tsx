import { MailButton } from "../../atoms/MailButton";

export function ContactContainer() {
  return(
    <>
      <p className='mb-2 text-neutral-500 dark:text-neutral-400'>Did i get your attention?!</p>
      <h1 className='sm:text-5xl text-4xl font-semibold text-center'>Get in Touch</h1>
      <p className='max-w-[40rem] text-center mt-8 text-neutral-600 dark:text-neutral-400'>I&apos;m currently working and not looking for any new opportunities, but I&apos;m open for freelances and small projects.</p>
      <MailButton />
    </>
  );
}
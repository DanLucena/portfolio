export interface ExperienceDescriptionProps {
  description: string;
}

export function ExperienceDescription({description}: ExperienceDescriptionProps) {
  return (
    <p className='text-sm font-extralight text-neutral-600 dark:text-neutral-400'>{description}</p>
  );
}
import { ExperienceCard, ExperienceCardProps } from "../../molecules/ExperienceCard";

interface ExperienceContainerProps {
  title: string;
  experienceCards: ExperienceCardProps[]
}

export function ExperienceContainer({title, experienceCards}: ExperienceContainerProps) {
  return (
    <div>
      <p className='mt-12 mb-6'>{title}</p>
      {
        experienceCards.map((item, index) => {
          return <ExperienceCard
            key={index}
            experienceDate={item.experienceDate}
            experienceDescription={item.experienceDescription}
            experienceRole={item.experienceRole}
            experienceStack={item.experienceStack}
          />
        })
      }
    </div>
  );
}
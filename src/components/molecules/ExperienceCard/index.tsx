import { ExperienceDateRange, ExperienceDateRangeProps } from "../../atoms/ExperienceDateRange";
import { ExperienceDescription, ExperienceDescriptionProps } from "../../atoms/ExperienceDescription";
import { ExperienceRoleTitle, ExperienceRoleTitleProps } from "../../atoms/ExperienceRoleTitle";
import { ExperienceStack, ExperienceStackProps } from "../../atoms/ExperienceStack";

export interface ExperienceCardProps {
  experienceDate: ExperienceDateRangeProps;
  experienceDescription: ExperienceDescriptionProps;
  experienceStack: ExperienceStackProps;
  experienceRole: ExperienceRoleTitleProps;
}

export function ExperienceCard({ experienceDate, experienceDescription, experienceStack, experienceRole }: ExperienceCardProps) {
  return (
    <>
      <div className='flex mb-10'>
        {
          experienceDate.singleDate
          ? <ExperienceDateRange singleDate={experienceDate.singleDate} />
          : <ExperienceDateRange startDate={experienceDate.startDate} endDate={experienceDate.endDate} />
        }
        <div className='max-w-[32rem]'>
          <ExperienceRoleTitle role={experienceRole.role} company={experienceRole.company} />
          <ExperienceDescription description={experienceDescription.description} />
          <ExperienceStack stack={experienceStack.stack}/>
        </div>
      </div>
    </>
  );
}
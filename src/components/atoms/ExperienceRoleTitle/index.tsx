export interface ExperienceRoleTitleProps {
  role: string;
  company: string;
}

export function ExperienceRoleTitle({role, company}: ExperienceRoleTitleProps) {
  return (
    <p className='mb-4'>{role} • {company}</p>
  );
}
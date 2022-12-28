export interface ExperienceDateRangeProps {
  startDate?: string;
  endDate?: string;
  singleDate?: string | null;
}

export function ExperienceDateRange({startDate, endDate, singleDate = null}: ExperienceDateRangeProps) {
  return (
    <div className='sm:min-w-[5.68rem] mr-12'>
      {
        singleDate
        ? <span className='font-light text-neutral-600 dark:text-neutral-400'>{singleDate}</span>
        : <span className='font-light text-neutral-600 dark:text-neutral-400'>{startDate} - {endDate}</span>
      }
    </div>
  )
}
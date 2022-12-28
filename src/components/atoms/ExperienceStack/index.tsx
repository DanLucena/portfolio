export interface ExperienceStackProps {
  stack: string[];
}

export function ExperienceStack({stack}: ExperienceStackProps) {
  return (
    <ul className='flex mt-2 text-sm flex-wrap'>
      <span className='mr-2'>Stack:</span>
      {
        stack.map((item, index) => {
          if(!index) return(<li key={index}>{item}</li>);
          return (<li key={index}><span className='mx-1'>-</span>{item}</li>);
        })
      }
    </ul>
  );
}
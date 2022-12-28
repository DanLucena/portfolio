import { GiDiceFire } from 'react-icons/gi';

interface TechListProps {
  technologies: string[]
}

export function TechList({technologies}: TechListProps) {
  return (
    <div className='flex mt-4'>
      <ul>
        {
          technologies.map((item, index) => {
            if(index%2 != 0) return;
            return (<li key={index} className='flex items-center mr-6 text-neutral-600 dark:text-neutral-400'><GiDiceFire className='mr-2' color='#A78BFA'/>{item}</li>)
          })
        }
      </ul>
      <ul>
        {
          technologies.map((item, index) => {
            if(index%2 == 0) return;
            return (<li key={index} className='flex items-center mr-6 text-neutral-600 dark:text-neutral-400'><GiDiceFire className='mr-2' color='#A78BFA'/>{item}</li>)
          })
        }
      </ul>
    </div>
  );
}
interface LinkProps {
  label: string;
  selected?: boolean
  summary?: number
}

export function Link({label, selected = false, summary}: LinkProps) {
  const selectedStyle = selected ? 'text-violet-400 dark:text-text-violet-400' : 'text-neutral-500 dark:text-white';

  return (
    <span>
      {summary ? <span className="text-sm mr-1 text-violet-400">0{summary}.</span> : null}
      <a className={['text-sm cursor-pointer font-light dark:hover:text-violet-400 hover:text-violet-400 transition duration-200 ease-in-out', selectedStyle].join(' ')}>{label}</a>
    </span>
  );
}
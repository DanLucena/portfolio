import { useEffect, useState } from "react";
import { IoIosArrowUp } from 'react-icons/io';
import { animateScroll as scroll } from 'react-scroll'

export function ScrollUpButton() {
  const [hidden, setHidden] = useState('-bottom-12');

  useEffect(() => {
    window.addEventListener("scroll", setVisibility);
  }, [])

  function setVisibility() {
    if(window.pageYOffset > 600) {
      setHidden('bottom-2');
    } else {
      setHidden('-bottom-12');
    }
  }

  return (
    <div onClick={() => scroll.scrollToTop()} className={['fixed bottom-2 right-4 border-2 dark:border-neutral-500 rounded transition-all duration-500 cursor-pointer', hidden].join(' ')}>
      <IoIosArrowUp size="2rem" />
    </div>
  );
}
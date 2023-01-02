import { ThemeChangerButton } from "../../atoms/ThemeChangerButton";
import { GiCrownedSkull } from 'react-icons/gi';
import { Link as LinkAtom } from "../../atoms/Link";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useHasMounted } from "../../../lib/hooks/useHasMounted";

interface TopNavBarProps {
  fixed?: boolean;
  blurry?: boolean;
  items: string[];
}

export function TopNavBar({fixed = true, blurry = true, items}: TopNavBarProps) {
  const styles = fixed ? 'fixed z-10' : null;
  const blur = blurry ? 'backdrop-blur-sm': null;
  const hasMounted = useHasMounted();

  return (
    <div className={["w-screen h-16 dark:border-neutral-700 flex", styles, blur].join(' ')}>
      <div className="2xl:w-9/12 w-11/12 mx-auto flex items-center">
        <GiCrownedSkull size='1.8rem' color="#A78BFA" className="hidden sm:block"/>
        <ul className="flex ml-auto">
          { hasMounted && items.map((item, index) => <li key={index} className="mr-6 last:mr-0"><Link activeClass="active" to={item} spy={true} smooth={true} duration={500} ><LinkAtom label={item} summary={index + 1} /></Link></li>) }
        </ul>
        <div className="flex ml-6">
          <ThemeChangerButton />
        </div>
      </div>
    </div>
  );
}
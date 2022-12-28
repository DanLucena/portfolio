import { useHasMounted } from '../../../lib/hooks/useHasMounted';
import { TbMoon, TbSun } from 'react-icons/tb';
import { useTheme } from 'next-themes';

export function ThemeChangerButton() {
  const { theme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  function themeIcon(theme: string | undefined) {
    if(hasMounted && theme === 'light') {
      return <TbMoon color='#737373' size="1.2rem" onClick={ () => setTheme('dark') }/>;
    }
    return <TbSun size="1.2rem" onClick={ () => setTheme('light') }/>;
  }

  return (
    <button>
      { themeIcon(theme) }
    </button>
  )
}
import { render } from "@testing-library/react";
import { ScrollUpButton } from './index';

describe('Atoms/ScrollUpButton', () => {
  it('must render a ScrollUpButton component', () => {
    const {container} = render(<ScrollUpButton />);

    expect(container.firstChild).toHaveClass('fixed bottom-2 right-4 border-2 dark:border-neutral-500 rounded transition-all duration-500 cursor-pointer');
  });
});
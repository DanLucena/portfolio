import { render, screen } from "@testing-library/react";
import { TopNavBar } from './index';

describe('Molecules/TopNavBar', () => {
  it('must render the nav bar component', () => {
    const menuItems = ['Home', 'Posts', 'Projects'];

    const {container} = render(<TopNavBar items={menuItems} />);
    menuItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
    expect(container.firstChild).toHaveClass('backdrop-blur-sm');
    expect(container.firstChild).toHaveClass('fixed');
  });

  it('must render the nav bar without blur', () => {
    const menuItems = ['Home', 'Posts', 'Projects'];

    const {container} = render(<TopNavBar items={menuItems} blurry={false}/>);
    expect(container.firstChild).not.toHaveClass('backdrop-blur-sm');
  });

  it('must render the nav bar not fixed', () => {
    const menuItems = ['Home', 'Posts', 'Projects'];

    const {container} = render(<TopNavBar items={menuItems} fixed={false}/>);
    expect(container.firstChild).not.toHaveClass('fixed');
  })
});
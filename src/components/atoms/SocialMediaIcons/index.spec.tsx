import { render, screen } from "@testing-library/react";
import { SocialMediaIcons } from './index';

describe('Atoms/SocialMediaIcons', () => {
  it('must render a social media icons component', () => {
    const {container} = render(<SocialMediaIcons />);

    expect(container.querySelector('#instagram')).toBeInTheDocument();
    expect(container.querySelector('#github')).toBeInTheDocument();
    expect(container.querySelector('#twitter')).toBeInTheDocument();
    expect(container.querySelector('#linkedin')).toBeInTheDocument();
  });

  it('must contain links to social medias', () => {
    render(<SocialMediaIcons />);
    const links = screen.getAllByRole('link');

    links.forEach(item => {
      expect(item).toHaveAttribute('href');
    })
  });
});
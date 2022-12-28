import { render } from "@testing-library/react";
import { TechList } from './index';

describe('Atoms/TechList', () => {
  it('must render a TechList component', () => {
    const technologies = ['Javascript', 'Typescript', 'VueJS', 'Rails', 'NodeJS', 'Typescript'];
    const {container} = render(<TechList technologies={technologies} />);

    const elements = container.querySelectorAll('li');
    expect(elements.length).toBeGreaterThan(0);
  });

  it('must not render list elements when provided array is empty', () => {
    const technologies: string[] = [];
    const {container} = render(<TechList technologies={technologies} />);

    const elements = container.querySelectorAll('li');
    expect(elements.length).not.toBeGreaterThan(0);
  });
});
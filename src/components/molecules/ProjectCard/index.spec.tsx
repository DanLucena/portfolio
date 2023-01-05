import { render } from "@testing-library/react";
import { ProjectCard } from './index';

describe('Molecules/ProjectCard', () => {
  it('must render the nav bar component', () => {
    const title = 'Dummy Project Card';
    const description = 'This is a dummy description for a project card';
    const projectStack = ['Vue 2', 'NodeJS', 'Typescript'];
    const link = 'https://www.google.com.br'

    const {container} = render(<ProjectCard description={description} title={title} projectStack={projectStack} link={link} />);

    expect(container.firstChild).toHaveClass('max-w-xs h-80 rounded border-2 dark:border-neutral-500 p-5 dark:bg-neutral-800');
  });
});
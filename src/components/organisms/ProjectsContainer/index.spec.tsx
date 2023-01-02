import { render, screen } from "@testing-library/react";
import { ProjectsContainer } from "./index";

describe('Organisms/ProjectsContainer', () => {
  it('must render a theme presentation container', () => {
    const cardProps = [
      {
        title: 'This is a dummy project tittle',
        description: 'This is a dummy project description for a dummy project',
        projectStack: ['Vue 2', 'NodeJS', 'Typescript']
      }
    ]

    render(
      <ProjectsContainer
        projects={cardProps}
      />
    );

    expect(screen.getByText(/This is a dummy project tittle/)).toBeInTheDocument();
    expect(screen.getByText(/This is a dummy project description for a dummy project/)).toBeInTheDocument();
  });
});
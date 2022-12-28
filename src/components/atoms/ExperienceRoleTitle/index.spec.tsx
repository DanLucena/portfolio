import { render, screen } from "@testing-library/react";
import { ExperienceRoleTitle } from './index';

describe('Atoms/Link', () => {
  it('must render a link component', () => {
    render(<ExperienceRoleTitle role="trainee" company="Prevision" />);

    expect(screen.getByText(/trainee/)).toBeInTheDocument();
  });
});
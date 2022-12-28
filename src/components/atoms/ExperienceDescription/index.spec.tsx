import { render, screen } from "@testing-library/react";
import { ExperienceDescription } from "./index";

describe('Atoms/ExperienceDateRange', () => {
  it('must render a the experience date range component with 2 dates', () => {
    render(<ExperienceDescription description="This is a test description" />);

    expect(screen.getByText(/This is a test description/)).toBeInTheDocument();
  });
});
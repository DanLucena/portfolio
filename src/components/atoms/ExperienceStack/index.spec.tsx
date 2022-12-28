import { render, screen } from "@testing-library/react";
import { ExperienceStack } from "./index";

describe('Atoms/ExperienceDateRange', () => {
  it('must render a the experience date range component with 2 dates', () => {
    const stacks = ['Angular', 'Typescript', 'NgRx'];
    render(<ExperienceStack stack={stacks} />);

    expect(screen.getByText(/Angular/)).toBeInTheDocument();
  });
});
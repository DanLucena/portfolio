import { render, screen } from "@testing-library/react";
import { Footer } from "./index";

describe('Atoms/ExperienceDateRange', () => {
  it('must render a the footer component', () => {
    render(<Footer />);

    expect(screen.getByText(/Build with ❤️ by Daniel Lucena/)).toBeInTheDocument();
  });
});
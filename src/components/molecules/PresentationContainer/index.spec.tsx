import { render, screen } from "@testing-library/react";
import { PresentationContainer } from "./index";

describe('Molecules/PresentationContainer', () => {
  it('must render a theme presentation container', () => {
    render(<PresentationContainer />);

    expect(screen.getByText(/Hi, my name is/)).toBeInTheDocument();
    expect(screen.getByText(/Daniel Lucena/)).toBeInTheDocument();
  });
});
import { render, screen } from "@testing-library/react";
import { HomeContainer } from "./index";

describe('Organisms/HomeContainer', () => {
  it('must render a theme presentation container', () => {
    render(
      <HomeContainer />
    );

    expect(screen.getByText(/About/)).toBeInTheDocument();
    expect(screen.getByText(/Experience/)).toBeInTheDocument();
    expect(screen.getByText(/Projects/)).toBeInTheDocument();
  });
});
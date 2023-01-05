import { render, screen } from "@testing-library/react";
import { ContactContainer } from "./index";

describe('Molecules/ContactContainer', () => {
  it('must render a theme presentation container', () => {
    render(
      <ContactContainer />
    );

    expect(screen.getByText(/Get in Touch/)).toBeInTheDocument();
  });
});
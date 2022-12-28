import { render, screen } from "@testing-library/react";
import { ThemeChangerButton } from "./index";

describe('Atoms/ThemeChangerButton', () => {
  it('must render a theme changer button', () => {
    render(<ThemeChangerButton />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
import { render, screen } from "@testing-library/react";
import { AboutSection } from "./index";

describe('Molecules/AboutSection', () => {
  it('must render a theme presentation container', () => {
    const technologies = ['Javascript', 'VueJS', 'Rails', 'NodeJS'];

    render(
      <AboutSection />
    );

    technologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    })
  });
});
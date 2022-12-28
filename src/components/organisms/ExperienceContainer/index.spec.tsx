import { render, screen } from "@testing-library/react";
import { ExperienceContainer } from "./index";

describe('Organisms/ExperienceContainer', () => {
  it('must render a theme presentation container', () => {
    const cardProps = [{
      experienceDate: {
        startDate: '2019',
        endDate: '2020'
      },
      experienceDescription: {
        description: 'This is a testing description'
      },
      experienceRole: {
        role: 'Trainee',
        company: 'Prevision'
      },
      experienceStack: {
        stack: ['Angular', 'Typescript', 'NgRx']
      }
    }]

    render(
      <ExperienceContainer
        title="Work Experiences"
        experienceCards={cardProps}
      />
    );

    expect(screen.getByText(/This is a testing description/)).toBeInTheDocument();
    expect(screen.getByText(/Trainee/)).toBeInTheDocument();
    expect(screen.getByText(/Angular/)).toBeInTheDocument();
    expect(screen.getByText(/Work Experiences/)).toBeInTheDocument();
  });
});
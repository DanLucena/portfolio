import { render, screen } from "@testing-library/react";
import { ExperienceCard } from "./index";

describe('Molecules/ExperienceCard', () => {
  it('must render a theme presentation container', () => {
    const cardProps = {
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
    }

    render(
      <ExperienceCard
        experienceDate={cardProps.experienceDate}
        experienceDescription={cardProps.experienceDescription}
        experienceRole={cardProps.experienceRole}
        experienceStack={cardProps.experienceStack}
      />
    );

    expect(screen.getByText(/This is a testing description/)).toBeInTheDocument();
    expect(screen.getByText(/Trainee/)).toBeInTheDocument();
    expect(screen.getByText(/Angular/)).toBeInTheDocument();
  });
});
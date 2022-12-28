import { render, screen } from "@testing-library/react";
import { ExperienceDateRange } from './index';

describe('Atoms/ExperienceDateRange', () => {
  it('must render a the experience date range component with 2 dates', () => {
    render(<ExperienceDateRange startDate="2019" endDate="2020" />);

    expect(screen.getByText(/2019 - 2020/)).toBeInTheDocument();
  });

  it('must render a the experience date range component with only one dates', () => {
    render(<ExperienceDateRange singleDate='2020' />);

    expect(screen.getByText(/2020/)).toBeInTheDocument();
  });
});
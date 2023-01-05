import { render, screen } from "@testing-library/react";
import { MailButton } from './index';

describe('Atoms/MailButton', () => {
  it('must render a MailButton component', () => {
    render(<MailButton />);

    expect(screen.getByText(/Send a Mail/)).toBeInTheDocument();
  });
});
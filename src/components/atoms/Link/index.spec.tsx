import { render, screen } from "@testing-library/react";
import { Link } from './index';

describe('Atoms/Link', () => {
  it('must render a link component', () => {
    const labelName = 'HomePage'
    render(<Link label={labelName} />);

    expect(screen.getByText(labelName)).toHaveClass('text-neutral-500');
    expect(screen.getByText(labelName)).toHaveClass('hover:text-violet-400');
    expect(screen.getByText(labelName)).toBeInTheDocument();
  });

  it('must render a selected link component', () => {
    const labelName = 'HomePage'
    render(<Link label={labelName} selected={true}/>);

    expect(screen.getByText(labelName)).toHaveClass('text-violet-400');
  });
});
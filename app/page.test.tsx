import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';

describe('Home page', () => {
  it('renders the FastGL brand heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders the primary CTA link', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument();
  });

  it('renders the tech stack pills', () => {
    render(<Home />);
    expect(screen.getByText('Next.js 16')).toBeInTheDocument();
    expect(screen.getByText('React 19')).toBeInTheDocument();
  });
});

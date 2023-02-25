import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ola', () => {
  render(<App />);
  const linkElement = screen.getByText(/ola/i);
  expect(linkElement).toBeInTheDocument();
});

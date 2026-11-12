import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Notas heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Notas/i);
  expect(headingElement).toBeInTheDocument();
});

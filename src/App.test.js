import { render, screen } from '@testing-library/react';
import App from './App';
import { Categories } from './components/category/category';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/shoppy/i);
  expect(linkElement).toBeInTheDocument();
});

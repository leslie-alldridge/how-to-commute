import { render, screen } from '@testing-library/react';
import App from './App';

test('renders advice for commuters', () => {
  render(<App />);
  const commuteAdvice = screen.getByText(/you should/i);
  expect(commuteAdvice).toBeInTheDocument();
});

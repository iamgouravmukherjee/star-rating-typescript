import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Star rating", () => {
  render(<App />);
  const starElement = screen.getByTestId(/star/i);
  expect(starElement).toBeInTheDocument();
});

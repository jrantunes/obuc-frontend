/* eslint-disable @typescript-eslint/ban-ts-comment */
import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import { JobsList } from ".";

jest.mock("components/JobList", () => {
  return function Mock() {
    return <div data-testid="Mock JobList" />;
  };
});

jest.mock("react-router-dom", () => {
  return {
    useNavigate: jest.fn()
  };
});

describe("<JobsList />", () => {
  it("should render correctly", () => {
    renderWithTheme(<JobsList />);

    expect(screen.getByRole("heading", { name: /vagas/i })).toBeInTheDocument();

    expect(screen.getByTestId("Mock JobList")).toBeInTheDocument();
  });
});

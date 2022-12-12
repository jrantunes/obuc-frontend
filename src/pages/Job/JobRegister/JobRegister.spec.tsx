/* eslint-disable @typescript-eslint/ban-ts-comment */
import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import { JobRegister } from ".";

jest.mock("components/FormJob", () => {
  return function Mock() {
    return <div data-testid="Mock FormJob" />;
  };
});

jest.mock("react-router-dom", () => {
  return {
    useNavigate: jest.fn()
  };
});

describe("<JobRegister />", () => {
  it("should render correctly", () => {
    renderWithTheme(<JobRegister />);

    expect(
      screen.getByRole("heading", { name: /nova vaga/i })
    ).toBeInTheDocument();

    expect(screen.getByTestId("Mock FormJob")).toBeInTheDocument();
  });
});

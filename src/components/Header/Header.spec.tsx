/* eslint-disable @typescript-eslint/ban-ts-comment */
import { screen } from "@testing-library/react";
import { useLocation } from "react-router-dom";
import { renderWithTheme } from "utils/tests/helpers";

import Header from ".";

jest.mock("react-router-dom", () => {
  return {
    //@ts-ignore
    Link: ({ children }) => children,
    useLocation: jest.fn()
  };
});

describe("<Header />", () => {
  it("should render the header", () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: "/"
    });

    const { container } = renderWithTheme(<Header />);

    expect(
      screen.getByRole("img", { name: /logo da confeitaria dona maria/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /vagas/i })).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /nova vaga/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the header without the new job button", () => {
    (useLocation as jest.Mock).mockReturnValue({
      pathname: "/vagas/novo"
    });

    renderWithTheme(<Header />);

    expect(
      screen.getByRole("img", { name: /logo da confeitaria dona maria/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /vagas/i })).toBeInTheDocument();

    expect(
      screen.queryByRole("button", { name: /nova vaga/i })
    ).not.toBeInTheDocument();
  });
});

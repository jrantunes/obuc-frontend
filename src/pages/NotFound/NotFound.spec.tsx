/* eslint-disable @typescript-eslint/ban-ts-comment */
import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import { NotFound } from ".";

jest.mock("react-router-dom", () => {
  return {
    //@ts-ignore
    Link: ({ children }) => children
  };
});

describe("<NotFound />", () => {
  it("should render correctly", () => {
    renderWithTheme(<NotFound />);

    expect(
      screen.getByRole("img", { name: /uma imagem de um bolo triste/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /página não encontrada/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /ir para página inicial/i })
    ).toBeInTheDocument();
  });
});

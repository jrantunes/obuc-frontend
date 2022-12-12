import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Heading from ".";

describe("<Heading />", () => {
  it("should render a black heading by default", () => {
    renderWithTheme(<Heading>Heading</Heading>);

    expect(screen.getByRole("heading", { name: /Heading/i })).toHaveStyle({
      color: "#030517"
    });
  });

  it("should render a gray heading", () => {
    renderWithTheme(<Heading color="gray">Heading</Heading>);

    expect(screen.getByRole("heading", { name: /Heading/i })).toHaveStyle({
      color: "#8F8F8F"
    });
  });

  it("should render a heading with the primary color", () => {
    renderWithTheme(<Heading color="primary">Heading</Heading>);

    expect(screen.getByRole("heading", { name: /Heading/i })).toHaveStyle({
      color: "#5ce1e6"
    });
  });

  it("should render a heading with the medium size by default", () => {
    renderWithTheme(<Heading>Heading</Heading>);

    expect(screen.getByRole("heading", { name: /Heading/i })).toHaveStyle({
      "font-size": "1.6rem"
    });
  });

  it("should render a heading with the small size", () => {
    renderWithTheme(<Heading size="small">Heading</Heading>);

    expect(screen.getByRole("heading", { name: /Heading/i })).toHaveStyle({
      "font-size": "1.4rem"
    });
  });

  it("should render a heading with the large size", () => {
    renderWithTheme(<Heading size="large">Heading</Heading>);

    expect(screen.getByRole("heading", { name: /Heading/i })).toHaveStyle({
      "font-size": "2rem"
    });
  });

  it("should render a heading with the xlarge size", () => {
    renderWithTheme(<Heading size="xlarge">Heading</Heading>);

    expect(screen.getByRole("heading", { name: /Heading/i })).toHaveStyle({
      "font-size": "2.8rem"
    });
  });
});

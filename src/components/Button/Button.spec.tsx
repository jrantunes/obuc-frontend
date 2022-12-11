import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { AiOutlineSave } from "react-icons/ai";
import Button from ".";

describe("<Button />", () => {
  it("should render with the medium size by default", () => {
    const { container } = renderWithTheme(<Button>Button</Button>);

    expect(screen.getByRole("button", { name: /button/i })).toHaveStyle({
      height: "3.6rem",
      padding: "0.8rem 4.8rem",
      "font-size": "1.8rem"
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render with small size", () => {
    renderWithTheme(<Button size="small">Button</Button>);

    expect(screen.getByRole("button", { name: /button/i })).toHaveStyle({
      height: "3rem",
      padding: "0.8rem 3.2rem",
      "font-size": "1.4rem"
    });
  });

  it("should render with large size", () => {
    renderWithTheme(<Button size="large">Button</Button>);

    expect(screen.getByRole("button", { name: /button/i })).toHaveStyle({
      height: "6rem",
      padding: "0.8rem 4.8rem",
      "font-size": "2.0rem"
    });
  });

  it("should render a fullWidth version", () => {
    renderWithTheme(<Button fullWidth>Button</Button>);

    expect(screen.getByRole("button", { name: /button/i })).toHaveStyle({
      width: "100%"
    });
  });

  it("should render a icon version", () => {
    renderWithTheme(
      <Button icon={<AiOutlineSave data-testid="icon" />}>Button</Button>
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render with icon on the right side", () => {
    renderWithTheme(
      <Button icon={<AiOutlineSave data-testid="icon" />} iconPosition="right">
        Button
      </Button>
    );

    expect(screen.getByTestId("icon")).toHaveStyle({
      order: 1
    });
  });

  it("should render a minimal version", () => {
    renderWithTheme(<Button minimal>Button</Button>);

    expect(screen.getByRole("button", { name: /button/i })).toHaveStyle({
      color: "#5ce1e6",
      background: "none"
    });

    expect(screen.getByRole("button", { name: /button/i })).toHaveStyleRule(
      "background",
      "none",
      {
        modifier: ":hover"
      }
    );
  });

  it("should render with a onlyIcon version", () => {
    renderWithTheme(<Button icon={<AiOutlineSave />} />);

    expect(screen.getByRole("button")).toHaveStyle({
      height: "auto"
    });
  });

  it("should render onlyIcon version with custom padding based on large size", () => {
    renderWithTheme(<Button icon={<AiOutlineSave />} size="large" />);

    expect(screen.getByRole("button")).toHaveStyle({
      padding: "2.4rem"
    });
  });

  it("should render onlyIcon version with custom padding based on small/medium size", () => {
    renderWithTheme(<Button icon={<AiOutlineSave />} size="medium" />);

    expect(screen.getByRole("button")).toHaveStyle({
      padding: "0.8rem"
    });
  });
});

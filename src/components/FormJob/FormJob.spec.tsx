import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import FormJob from ".";

jest.mock("@react-pdf/renderer", () => {
  return {
    pdf: jest.fn(),
    StyleSheet: {
      create: jest.fn()
    }
  };
});

describe("<FormJob />", () => {
  it("should render the form", () => {
    const { container } = renderWithTheme(<FormJob handleData={jest.fn()} />);

    expect(screen.getByPlaceholderText(/Título do cargo/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/Salário/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/atividades/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/benefícios/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/etapas/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/habilidades/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /salvar/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

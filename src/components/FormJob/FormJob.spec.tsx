import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import FormJob from ".";

describe("<FormJob />", () => {
  it("should render the form", () => {
    const { container } = renderWithTheme(<FormJob />);

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

import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import userEvent from "@testing-library/user-event";

import ItemsField from ".";

describe("<ItemsField />", () => {
  it("should render with label", () => {
    renderWithTheme(
      <ItemsField label="Label" labelFor="input" placeholder="Placeholder" />
    );

    expect(screen.getByLabelText(/label/i)).toBeInTheDocument();
  });

  it("should render without label", () => {
    renderWithTheme(<ItemsField placeholder="Placeholder" />);

    expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument();
  });

  it("should render with placeholder", () => {
    renderWithTheme(
      <ItemsField label="Label" labelFor="input" placeholder="Placeholder" />
    );

    expect(screen.getByPlaceholderText(/placeholder/i)).toBeInTheDocument();
  });

  it("should change its value when typing", async () => {
    const onInputChange = jest.fn();

    renderWithTheme(
      <ItemsField
        label="Label"
        labelFor="input"
        placeholder="Placeholder"
        onInputChange={onInputChange}
      />
    );

    const input = screen.getByPlaceholderText(/placeholder/i);
    const text = "Text example";

    userEvent.type(input, text);

    await waitFor(() => {
      expect(onInputChange).toHaveBeenCalledTimes(text.length);
      expect(input).toHaveValue(text);
    });

    expect(onInputChange).toHaveBeenCalledWith(text);
  });

  it("should not change its value when disabled", async () => {
    const onInputChange = jest.fn();

    renderWithTheme(
      <ItemsField
        label="Label"
        labelFor="input"
        placeholder="Placeholder"
        onInputChange={onInputChange}
        disabled
      />
    );

    const input = screen.getByPlaceholderText(/placeholder/i);
    expect(input).toBeDisabled();

    const text = "Text example";

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });

    expect(onInputChange).not.toHaveBeenCalled();
  });

  it("should render label with dynamic opacity based on input value", async () => {
    renderWithTheme(
      <ItemsField label="Label" labelFor="input" placeholder="Placeholder" />
    );

    const input = screen.getByPlaceholderText(/placeholder/i);
    const label = screen.getByText(/label/i);

    expect(label).toHaveStyle({
      opacity: "0"
    });

    expect(label).toHaveAttribute("aria-hidden", "true");

    userEvent.type(input, "Some test");

    await waitFor(() => {
      expect(input).toHaveFocus();
      expect(label).toHaveStyle({
        opacity: "1"
      });
    });

    expect(label).toHaveAttribute("aria-hidden", "false");
  });

  it("should be accessible with tab", async () => {
    renderWithTheme(
      <ItemsField label="Label" labelFor="input" placeholder="Placeholder" />
    );

    const input = screen.getByPlaceholderText(/placeholder/i);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    await waitFor(() => {
      expect(document.body).not.toHaveFocus();
      expect(input).toHaveFocus();
    });
  });

  it("should not to be accessible with tab when disabled", async () => {
    renderWithTheme(
      <ItemsField
        label="Label"
        labelFor="input"
        placeholder="Placeholder"
        disabled
      />
    );

    const input = screen.getByPlaceholderText(/placeholder/i);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    await waitFor(() => {
      expect(input).not.toHaveFocus();
    });
  });

  it("should render with error", () => {
    renderWithTheme(
      <ItemsField
        label="Label"
        labelFor="input"
        placeholder="Placeholder"
        error="Error Message"
      />
    );

    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });
});

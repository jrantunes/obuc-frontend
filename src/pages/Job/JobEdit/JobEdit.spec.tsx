/* eslint-disable @typescript-eslint/ban-ts-comment */
import { screen } from "@testing-library/react";
import { useJobs } from "hooks/useJobs";
import { useParams } from "react-router-dom";
import { renderWithTheme } from "utils/tests/helpers";
import { JobEdit } from ".";

jest.mock("components/FormJob", () => {
  return function Mock() {
    return <div data-testid="Mock FormJob" />;
  };
});

jest.mock("react-router-dom", () => {
  return {
    useNavigate: jest.fn(),
    useParams: jest.fn()
  };
});

jest.mock("hooks/useJobs", () => {
  return {
    useJobs: jest.fn()
  };
});

describe("<JobEdit />", () => {
  it("should render correctly", () => {
    (useParams as jest.Mock).mockReturnValue({
      id: "test-id"
    });

    (useJobs as jest.Mock).mockReturnValue({
      findJobById: () => ({
        id: "test-id",
        name: "test-name",
        salary: "123",
        activities: "test-activity",
        benefits: "test-benefit",
        steps: "test-step",
        skills: "test-skill",
        experiences: "test-experience"
      })
    });

    renderWithTheme(<JobEdit />);

    expect(
      screen.getByRole("heading", { name: /editar vaga/i })
    ).toBeInTheDocument();

    expect(screen.getByTestId("Mock FormJob")).toBeInTheDocument();
  });
});

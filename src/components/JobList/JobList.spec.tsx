/* eslint-disable @typescript-eslint/ban-ts-comment */
import { screen } from "@testing-library/react";
import { useJobs } from "hooks/useJobs";
import { renderWithTheme } from "utils/tests/helpers";

import JobList from ".";

import mockedJobs from "./mock";

jest.mock("react-router-dom", () => {
  return {
    //@ts-ignore
    Link: ({ children }) => children,
    useLocation: jest.fn()
  };
});

jest.mock("hooks/useJobs", () => {
  return {
    useJobs: jest.fn()
  };
});

jest.mock("@react-pdf/renderer", () => {
  return {
    pdf: jest.fn(),
    StyleSheet: {
      create: jest.fn()
    }
  };
});

describe("<JobList />", () => {
  it("should render with items", () => {
    (useJobs as jest.Mock).mockReturnValue({
      jobs: mockedJobs
    });

    renderWithTheme(<JobList />);

    expect(screen.getAllByRole("listitem")).toHaveLength(mockedJobs.length);
  });

  it("should render without items", () => {
    (useJobs as jest.Mock).mockReturnValue({
      jobs: []
    });

    renderWithTheme(<JobList />);

    expect(screen.queryAllByRole("listitem")).not.toHaveLength(
      mockedJobs.length
    );

    expect(
      screen.getByRole("heading", { name: /nenhuma vaga cadastrada!/i })
    ).toBeInTheDocument();
  });
});

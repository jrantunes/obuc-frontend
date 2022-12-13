/* eslint-disable @typescript-eslint/ban-ts-comment */
import { screen } from "@testing-library/react";
import { useJobs } from "hooks/useJobs";
import { renderWithTheme } from "utils/tests/helpers";

import JobCard from ".";

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

const props = {
  name: "name",
  description: "description",
  id: "id"
};

describe("<JobCard />", () => {
  it("should render correctly", () => {
    (useJobs as jest.Mock).mockReturnValue({
      handleRemoveJob: jest.fn()
    });

    renderWithTheme(<JobCard {...props} />);

    expect(
      screen.getByRole("heading", { name: props.name })
    ).toBeInTheDocument();

    expect(screen.getByText(props.description)).toBeInTheDocument();

    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
});

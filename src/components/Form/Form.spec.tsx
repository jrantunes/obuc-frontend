// import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import { FormWrapper, AuthFormDescription } from ".";

describe("<Form />", () => {
  it("should render the heading", () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <AuthFormDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
          tempore, veniam ipsum animi error dolorum debitis esse exercitationem
          voluptates rem architecto, molestiae, quo asperiores aspernatur
          perspiciatis corporis quos blanditiis saepe.
        </AuthFormDescription>
      </FormWrapper>
    );

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        height: 100%;
      }

      .c0 form {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        height: 100%;
      }

      .c1 {
        color: #8F8F8F;
        font-size: 1.4rem;
        font-family: Roboto,--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
        font-weight: 400;
        line-height: 1.8rem;
        margin: 0 auto 3.2rem;
        max-width: 26rem;
        text-align: center;
      }

      <body>
        <div>
          <div
            class="c0"
          >
            <p
              class="c1"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore, veniam ipsum animi error dolorum debitis esse exercitationem voluptates rem architecto, molestiae, quo asperiores aspernatur perspiciatis corporis quos blanditiis saepe.
            </p>
          </div>
        </div>
      </body>
    `);
  });
});

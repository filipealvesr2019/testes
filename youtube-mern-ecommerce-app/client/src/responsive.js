import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (min-width: 280px) {
      ${props}
      .space{
        padding-left: 1.5rem;
      }
      
    }

  `;
};

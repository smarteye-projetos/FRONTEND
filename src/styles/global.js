import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw.js";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border:0;
    font-family: Roboto,  sans-serif;
  }
  :root {
      font-size: ${px2vw(30)};

      @media (min-width: 768px) {
        font-size: ${px2vw(24)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(22)};
      }
    }
`;

export default Global;
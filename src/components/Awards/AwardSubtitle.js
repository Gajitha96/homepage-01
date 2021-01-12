/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const AwardSubtitle = () => (
  <p css={styles}>
   Eimsky won the Gold award for Digital Supply Chain Suite at NBQSA 2019.
  </p>
);

const styles = css`
  color: #7a7a7a;
  font-size: 15px;
  line-height: 1.7;
  @media (max-width: 700px) {
    padding: 0 40px;
    br {
      display: none;
    }
  }
`;

export default AwardSubtitle;

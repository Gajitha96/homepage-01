/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import AwardTitle from "./AwardTitle";
import  AwardSubtitle from "./AwardSubtitle";
import AwardCard from "./AwardCard";
import Container from "../GlobalComponents/Container";


const Awards = () => (
  <div css={styles} className="Awards">
    <AwardTitle />
    <Icon />
    <AwardSubtitle />
    <Container>
      <AwardCard
        title="NBQSA 2017 Smart Office Suite (SOS)"
        desc="Eimsky won the Overall Bronze Award and the Most Innovative & best solution in cloud computing Application for Smart Office Suite.
        Eimsky also won the Silver award for Smart Office Suite in General Applications Category."
      />
      <AwardCard
        title="APICTA Awards 2017 - Dhaka smart Office Suite (SOS)"
        desc="You may want to browse through Digital Marketing or Corporate HTML CSS templates on our website."
      />
    
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 80vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Awards;

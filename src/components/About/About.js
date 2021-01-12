/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Icon from "../GlobalComponents/Icon";
import Aboutbg from "../Image/Strength.jpeg";


const About = ({ text }) => {
  const [training, setTraining] = useState("FirstClass");

  return (
    <section css={styles} className="About" id="About">
      <h2>
        <span> OUR STRENGTHS.</span>
      </h2>
      <Icon />
      <div>

        Dynamic TEAM.<br />

        Exponential growth of the market share locally and internationally.<br />

        First choice in domestic market for RFID/ IOT based innovative solutions.<br />

        Domain expertise on RFID and artificial intelligence catering to various domains of business as it evolves in a dynamic world.
      </div>

    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 100px 0;
  text-align: center;
  background: url('${Aboutbg}') no-repeat center/cover;
  h2 {
    color: #232d39;
    font-size: 26px;
    font-weight: 900;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  p {
    color: #fff;
    font-size: 15px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0 0 0;
  }
  @media (max-width: 900px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 580px) {
    p {
      padding: 0 20px;
      br {
        display: none;
      }
    }
  }
  @media (min-width: 901px) and (max-width: 1226px) {
    .container{
      justify-content: space-between;
      max-width: 90%;
    }
  }
`;

export default About;

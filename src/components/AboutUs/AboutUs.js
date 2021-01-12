/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Icon from "../GlobalComponents/Icon";
import scheduleBg from "../Image/about.jpg";
import Container from "../GlobalComponents/Container";

const Schedule = () => {

  return (
    <section css={styles} className="schedule" id="schedule">
      <h2>
        <span>ABOUT US</span>
      </h2>
      <Icon />
      <div>
        <p>Eimsky Business Solutions (Pvt) Ltd is a Sri Lankan corporate company established in June 2010.
          <br /> It is built on a strong foundation of values and ethics.
          <br />  Eimsky has been able to expand its customer base to several other region of the globe within a very short period of time.
          <br />  Eimsky currently has solutions deployed in Sri Lanka, South East Asia, Australia.
          <br /> To provide world-class solutions to customers, Eimsky has partnered with internationally recognized business partners.</p>

        <p>Eimsky, with the recent acquisition by Omobio Pvt Ltd, to offer a state-of-the-art
        <br />  platform for Internet of Things (IoT) with fully configurable software solutions with advanced analytics, 
        <br /> RFID hardware platform enabling end-to-end business intelligence and data visibility across multiple industries.</p>
      </div>

      {/* <Container>
        <ScheduleLinks setDay={setDay} day={day} />
        <Table day={day} />
      </Container> */}
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 120px 0;
  min-height: 100vh;
  text-align: center;
  background: url('${scheduleBg}') no-repeat center/cover;
  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  p {
    color: #fff;
    font-size: 16px;
    line-height: 1.7;
    margin: 20px 0;
  }
  .container{
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  @media(max-width: 640px) {
    p{
      padding: 0 30px;
      br{
        display: none;
      }
    }
    .container{
      max-width: 92%;
    }
  }
`;

export default Schedule;

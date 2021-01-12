/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";


const Footer = ({ text }) => (
  <section css={styles} className="strenth">
    <div class="footer">
      <div class="row">
        <div class="col-md-3">
          <h4>ABOUT EIMSKY</h4>
          <p>We are specialized in providing cutting edge<br />
             RFID, IoT and NFC solutions.<br />
            We are also expertized in re-designing the<br />
             current service delivery model through <br />
               innovations and enabling technologies. </p>
        </div>
        <div class="col-md-3">
          <h4>PRODUCT CATALOGUE</h4>
          <p>Make a request to receive our latest product catalogue for new ideas, inspiration and our services!</p>

        </div>
        <div class="col-md-3">
          <h4>Quick content</h4>
          <p> <i class="fa fa-phone-square"></i>+1 0123456789</p>
          <p> <i class="fa fa-envelope"></i>info@eimsky.com </p>
          <p> <i class="fa fa-home"></i> St. Alban's Place,<br />
                                                 Colombo 4, Sri Lanka.</p>

        </div>
        <div class="col-md-3">
          <h4>Follow Us on</h4>
          <p> <i class="fa fa-facebook-official"></i>Facebook</p>
          <p> <i class="fa fa-youtube-play"></i>YouTube</p>
          <p> <i class="fa fa-twitter"></i>Twitter</p>
        </div>



      </div>
       <hr>
      </hr>  <h6 class="copyright">© 2020 Eimsky Business Solutions Pvt Ltd. All Rights Reserved.</h6>
    </div>

  </section>
);

const styles = css`
width: 100%;
padding: 100px 0;
text-align: center;
h2 {
  color: #232d39;
  font-weight: 900;
  font-size: 36px;
  letter-spacing: 1.3px;
  line-height: 1;
  span {
    color: #ed563b;
  }
}
> p {
  color: #7a7a7a;
  font-size: 16px;
  line-height: 1.7;
}
`;

export default Footer;

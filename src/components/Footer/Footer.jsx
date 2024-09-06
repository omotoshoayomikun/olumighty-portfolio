import React from "react";
import styles from "./Footer.module.css";
import { OutlineBtn } from "../Form/Button/Btn";
function Footer() {
  return (
    <>
      <div className="side-padding mb-20">
        <hr className={styles.hr_line} />
        <div className={styles.head_text}>Connect with me</div>
        <div className="flex gap-10 wrap">
          <a href="https://youtu.be/HZXbl8IU_Lc" target="_blank">
            <OutlineBtn text="Youtube" />
          </a>
          <a href="https://www.facebook.com/Olumigty22" target="_blank">
            <OutlineBtn text="Facebook" />
          </a>
          <a href="mailto:korodeopeyemisunday@gmail.com" target="_blank">
            <OutlineBtn text="Email" />
          </a>
          <a href="" target="_blank">
            <OutlineBtn text="Twitter" />
          </a>
          <a href="https://www.instagram.com/olumighty_gfx?igsh=MWFnOTJjaXFlMjRnMQ==" target="_blank">
            <OutlineBtn text="Instagram" />
          </a>
        </div>
      </div>
      <div className="flex justify-between"></div>
    </>
  );
}

export default Footer;

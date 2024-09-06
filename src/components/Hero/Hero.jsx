import React from "react";
import styles from "./Hero.module.css";
import { Btn } from "../Form/Button/Btn";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { GoMail } from "react-icons/go";
function Hero() {
  const handleClick = () => {};

  return (
    <section className={`side-padding ${styles.hero_section}`}>
      <div className={`${styles.hero_container}`}>
        <div className={`${styles.hero_header_container}`}>
          <h1>Hey there!</h1>
          <h1 className="mb-20">
            I am a design Powerhouse ​with six (6) years of ​experience in
            graphic design ​with keen interests in public ​relations, and
            advertising.
          </h1>
          <Btn text="Contact me" handleClick={handleClick} />
        </div>
        <div className="flex gap-10 wrap">
          <a href=" https://www.instagram.com/olumighty_gfx?igsh=MWFnOTJjaXFlMjRnMQ==" target="_blank">
            <FaInstagram className={`${styles.icon_item}`} />
          </a>
          <a href="https://www.facebook.com/Olumigty22" target="_blank">
            <FaFacebook className={`${styles.icon_item}`} />
          </a>
          <a href="https://youtu.be/HZXbl8IU_Lc" target="_blank">
            <FaYoutube className={`${styles.icon_item}`} />
          </a>
          <a href="" target="_blank">
            <FaTwitter className={`${styles.icon_item}`} />
          </a>
          <a href="mailto:korodeopeyemisunday@gmail.com">
          <GoMail  className={`${styles.icon_item}`} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

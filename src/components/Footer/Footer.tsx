import React from "react";
import classes from "./Footer.module.scss";

import { Link } from "react-router-dom";

import youtubeSvg from "../../assets/img/svg/youtube.svg";
import linkedinSvg from "../../assets/img/svg/linkedin.svg";
import cronSvg from "../../assets/img/svg/cronlogo.svg";
import { Container } from "../../hoc/Container/Container";
import { Line } from "../UI/Line/Line";

export const Footer = (): React.ReactElement => {
  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.footer__top}>
          <p>
            142432, Россия, Московская обл., г. Черноголовка, пр. 1-й, д. 4,
            ком. 215
          </p>
          <span className={classes.map}>
            <Link to={"/contacts"}>Смотреть на карте </Link>
          </span>
          <div className={classes.tel}>
            <a href="tel:+74965224044">+7 (49652) 240-44</a>
          </div>
          <div className={classes.email}>
            <a href="mailto:sales@enspectr.com">sales@enspectr.com</a>
          </div>
        </div>
        <Line isFooter />
        <div className={classes.footer__bottom}>
          <div className={classes.info}>
            <p>ООО «Спектр-М» &copy; 2019</p>
            <Link to="/confident">Политика конфиденциальности</Link>
          </div>
          <div className={classes.links}>
            <div className={classes.social}>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeSvg} alt="youtube" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinSvg} alt="linkedIn" />
              </a>
            </div>
            <div className={classes.footer__logo}>
              <img src={cronSvg} alt="cron" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

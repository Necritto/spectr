import React from "react";
import classes from "./Info.module.scss";

import pinSvg from "../../assets/img/svg/map-pin.svg";
import youtubeSvg from "../../assets/img/svg/youtube.svg";
import linkedinSvg from "../../assets/img/svg/linkedin.svg";

export const Info = () => {
  return (
    <div className={classes.container}>
      <div className={classes["add-info"]}>
        <div className={classes.location}>
          <a
            href="https://yandex.ru/maps/?ll=37.711407%2C55.677881&z=9.81"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pinSvg} alt="pin" />
          </a>
          <p>Где мы находимся?</p>
        </div>
        <a className={classes.mail} href="mailto:sales@enspectr.com">
          sales@enspectr.com
        </a>
        <div className={classes.contact}>
          <a className={classes.tel} href="tel:+74965224044">
            +7 (49652) 240-44
          </a>
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
              <img src={linkedinSvg} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.triangle} />
    </div>
  );
};

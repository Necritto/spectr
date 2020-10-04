import React, { useState } from "react";
import classes from "./ContactsPage.module.scss";

import { ISwapHeading } from "../../utils/interfaces/interfaces";
import { Map } from "../../components/Map/Map";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Button } from "../../components/UI/Button/Button";
import { Modal } from "../../components/UI/Modal/Modal";
import { Portal } from "../../utils/Portal/Portal";

export const ContactsPage = ({
  SWAP_HEADING,
  windowWidth,
}: ISwapHeading): React.ReactElement => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const showModal = (): void => setIsOpenModal(true);
  const closeModal = (): void => setIsOpenModal(false);

  isOpenModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");

  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <section className={classes.contacts}>
        <h1>ООО «Спектр-М»</h1>
        <p>
          142432, Россия, Московская обл., г. Черноголовка, пр. 1-й, д. 4, ком.
          215
        </p>
        <a href="mailto:sales@enspectr.com">sales@enspectr.com</a>
        <a href="tel:+74965224044">+7 (49652) 240-44</a>
        <div className={classes.contact__btn}>
          <Button isPrimary value={"Напишите нам"} onShow={showModal} />
        </div>
      </section>
      <section className={classes.map}>
        <Map />
      </section>

      {isOpenModal && (
        <Portal>
          <Modal onCancel={closeModal} onSubmit={closeModal} />
        </Portal>
      )}
    </main>
  );
};

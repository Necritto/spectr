import React, { useState } from "react";
import classes from "./Header.module.scss";

import { Logo } from "../Logo/Logo";
import { Navbar } from "../Navbar/Navbar";
import { Additional } from "../Additional/Additional";
import { Portal } from "../../utils/Portal/Portal";
import { Modal } from "../UI/Modal/Modal";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);
  const handleSubmit = (): void => setIsOpen(false);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
        <Navbar />
        <Additional onShow={showModal} />
        {isOpen && (
          <Portal>
            <Modal onCancel={closeModal} onSubmit={handleSubmit} />
          </Portal>
        )}
      </div>
    </header>
  );
};

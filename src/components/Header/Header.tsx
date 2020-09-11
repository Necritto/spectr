import React, { useState, useEffect } from "react";
import classes from "./Header.module.scss";

import { Logo } from "../Logo/Logo";
import { Navbar } from "../Navbar/Navbar";
import { Additional } from "../Additional/Additional";
import { Portal } from "../../utils/Portal/Portal";
import { Modal } from "../UI/Modal/Modal";
import { Search } from "../UI/Search/Search";
import { debounce } from "../../utils/helpers/debounce";

export const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [windowWidth, setWindowWidth] = useState(99999);

  useEffect(() => {
    const handleResize = debounce(() => setWindowWidth(window.innerWidth), 300);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showModal = (): void => setIsOpenModal(true);
  const closeModal = (): void => setIsOpenModal(false);
  const submitModalHandler = (): void => setIsOpenModal(false);

  const toggleShowSearch = (): void => setIsOpenSearch(!isOpenSearch);
  const submitSearchHandler = (): void => setIsOpenSearch(false);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
        {isOpenSearch ? (
          windowWidth <= 980 ? (
            <Search onClick={submitSearchHandler} isSearchModal />
          ) : (
            <Search onClick={submitSearchHandler} />
          )
        ) : (
          <Navbar />
        )}
        <Additional
          onShowModal={showModal}
          onShowSearch={toggleShowSearch}
          isOpenSearch={isOpenSearch}
        />
        {isOpenModal && (
          <Portal>
            <Modal onCancel={closeModal} onSubmit={submitModalHandler} />
          </Portal>
        )}
      </div>
    </header>
  );
};

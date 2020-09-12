import React, { useState, useEffect } from "react";

import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

import { debounce } from "../utils/helpers/debounce";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const SWAP_HEADING: number = 980;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
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

  const showBurgerMenu = (): void => setIsOpenBurgerMenu(true);
  const closeBurgerMenu = (): void => setIsOpenBurgerMenu(false);

  return (
    <>
      <Header
        SWAP_HEADING={SWAP_HEADING}
        isOpenModal={isOpenModal}
        isOpenSearch={isOpenSearch}
        isOpenBurgerMenu={isOpenBurgerMenu}
        windowWidth={windowWidth}
        showModal={showModal}
        closeModal={closeModal}
        submitModalHandler={submitModalHandler}
        toggleShowSearch={toggleShowSearch}
        submitSearchHandler={submitSearchHandler}
        showBurgerMenu={showBurgerMenu}
        closeBurgerMenu={closeBurgerMenu}
      />
      <>{children}</>
      <Footer />
    </>
  );
};

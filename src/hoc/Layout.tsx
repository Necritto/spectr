import React, { useState } from "react";

import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

type LayoutProps = {
  children: React.ReactNode;
  SWAP_HEADING: number;
  windowWidth: number;
};

export const Layout = ({
  children,
  SWAP_HEADING,
  windowWidth,
}: LayoutProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const showModal = (): void => setIsOpenModal(true);
  const closeModal = (): void => setIsOpenModal(false);
  const submitModalHandler = (): void => setIsOpenModal(false);

  const toggleShowSearch = (): void => setIsOpenSearch(!isOpenSearch);
  const submitSearchHandler = (): void => setIsOpenSearch(false);

  const showBurgerMenu = (): void => setIsOpenBurgerMenu(true);
  const closeBurgerMenu = (): void => setIsOpenBurgerMenu(false);

  isOpenModal ||
  (isOpenSearch && windowWidth <= SWAP_HEADING) ||
  isOpenBurgerMenu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");

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

import React, { useState, useContext } from "react";

import { useHistory } from "react-router-dom";

import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Context } from "../../utils/context/context";
import { INavNodes } from "../../utils/interfaces/interfaces";

type LayoutProps = {
  readonly children: React.ReactNode;
  readonly navData: INavNodes;
  readonly burgerNavData: INavNodes;
};

export const Layout = ({ children, navData, burgerNavData }: LayoutProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  let history = useHistory();

  const showModal = (): void => setIsOpenModal(true);
  const closeModal = (): void => setIsOpenModal(false);
  const submitModalHandler = (): void => setIsOpenModal(false);

  const toggleShowSearch = (): void => setIsOpenSearch(!isOpenSearch);
  const submitSearchHandler = (): void => {
    history.push("/search");
    setIsOpenSearch(false);
  };

  const showBurgerMenu = (): void => setIsOpenBurgerMenu(true);
  const closeBurgerMenu = (): void => setIsOpenBurgerMenu(false);

  const { SWAP_HEADING, windowWidth } = useContext(Context);

  isOpenModal ||
  (isOpenSearch && windowWidth <= SWAP_HEADING) ||
  isOpenBurgerMenu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");

  return (
    <>
      <Header
        isOpenModal={isOpenModal}
        isOpenSearch={isOpenSearch}
        isOpenBurgerMenu={isOpenBurgerMenu}
        showModal={showModal}
        closeModal={closeModal}
        submitModalHandler={submitModalHandler}
        toggleShowSearch={toggleShowSearch}
        submitSearchHandler={submitSearchHandler}
        showBurgerMenu={showBurgerMenu}
        closeBurgerMenu={closeBurgerMenu}
        navData={navData}
        burgerNavData={burgerNavData}
      />
      <>{children}</>
      <Footer />
    </>
  );
};

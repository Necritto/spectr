import React from "react";
import classes from "./Header.module.scss";

import { Logo } from "../Logo/Logo";
import { Navbar } from "../Navbar/Navbar";
import { Additional } from "../Additional/Additional";
import { Portal } from "../../utils/Portal/Portal";
import { Modal } from "../UI/Modal/Modal";
import { Search } from "../UI/Search/Search";
import { BurgerMenu } from "../UI/BurgerMenu/BurgerMenu";
import { ISwapHeading } from "../../App";
import { Container } from "../../hoc/Container/Container";

interface HeaderProps extends ISwapHeading {
  isOpenModal: boolean;
  isOpenSearch: boolean;
  isOpenBurgerMenu: boolean;
  showModal: () => void;
  closeModal: () => void;
  submitModalHandler: () => void;
  toggleShowSearch: () => void;
  submitSearchHandler: () => void;
  showBurgerMenu: () => void;
  closeBurgerMenu: () => void;
}

export const Header = ({
  SWAP_HEADING,
  isOpenModal,
  isOpenSearch,
  isOpenBurgerMenu,
  windowWidth,
  showModal,
  closeModal,
  submitModalHandler,
  toggleShowSearch,
  submitSearchHandler,
  showBurgerMenu,
  closeBurgerMenu,
}: HeaderProps) => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes["header-wrap"]}>
          {windowWidth > SWAP_HEADING ? (
            <>
              <Logo />
              {isOpenSearch ? (
                <Search onClick={submitSearchHandler} />
              ) : (
                <Navbar />
              )}
              <Additional
                onShowModal={showModal}
                onShowSearch={toggleShowSearch}
                onShowBurgerMenu={showBurgerMenu}
                isOpenSearch={isOpenSearch}
              />
            </>
          ) : (
            <>
              {isOpenSearch && (
                <Search onClick={submitSearchHandler} isSearchModal />
              )}
              {isOpenBurgerMenu && (
                <BurgerMenu onCloseBurgerMenu={closeBurgerMenu} />
              )}
              <Additional
                onShowModal={showModal}
                onShowSearch={toggleShowSearch}
                onShowBurgerMenu={showBurgerMenu}
                isOpenSearch={isOpenSearch}
                isBurgerMenu
              />
            </>
          )}

          {isOpenModal && (
            <Portal>
              <Modal onCancel={closeModal} onSubmit={submitModalHandler} />
            </Portal>
          )}
        </div>
      </Container>
    </header>
  );
};

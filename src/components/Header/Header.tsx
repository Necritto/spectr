import React, { useContext } from "react";
import classes from "./Header.module.scss";

import { Logo } from "../Logo/Logo";
import { Navbar } from "../Navbar/Navbar";
import { Additional } from "../Additional/Additional";
import { Portal } from "../../utils/Portal/Portal";
import { Modal } from "../UI/Modal/Modal";
import { Search } from "../UI/Search/Search";
import { BurgerMenu } from "../UI/BurgerMenu/BurgerMenu";
import { INavNodes } from "../../utils/interfaces/interfaces";
import { Container } from "../../hoc/Container/Container";
import { Context } from "../../utils/context/context";

type HeaderProps = {
  readonly isOpenModal: boolean;
  readonly isOpenSearch: boolean;
  readonly isOpenBurgerMenu: boolean;
  readonly showModal: () => void;
  readonly closeModal: () => void;
  readonly submitModalHandler: () => void;
  readonly toggleShowSearch: () => void;
  readonly submitSearchHandler: () => void;
  readonly showBurgerMenu: () => void;
  readonly closeBurgerMenu: () => void;
  readonly navData: INavNodes;
  readonly burgerNavData: INavNodes;
};

export const Header = ({
  isOpenModal,
  isOpenSearch,
  isOpenBurgerMenu,
  showModal,
  closeModal,
  submitModalHandler,
  toggleShowSearch,
  submitSearchHandler,
  showBurgerMenu,
  closeBurgerMenu,
  navData,
  burgerNavData,
}: HeaderProps): React.ReactElement => {
  const { SWAP_HEADING, windowWidth } = useContext(Context);

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
                <Navbar navData={navData} />
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
                <BurgerMenu
                  onCloseBurgerMenu={closeBurgerMenu}
                  navData={burgerNavData}
                />
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

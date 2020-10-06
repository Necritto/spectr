import React, { useContext } from "react";
import classes from "./SingleNewPage.module.scss";

import { INewData } from "../../utils/interfaces/interfaces";
import { Container } from "../../hoc/Container/Container";
import { Context } from "../../utils/context/context";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Button } from "../../components/UI/Button/Button";

type SingleNewPageProps = {
  readonly newData: INewData;
};

export const SingleNewPage = ({
  newData,
}: SingleNewPageProps): React.ReactElement => {
  const { title, imgUrl, descr, link } = newData;
  const { SWAP_HEADING, windowWidth } = useContext(Context);

  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <Container>
        <article className={classes["new-article"]}>
          <h1>{title}</h1>
          <img src={imgUrl} alt="img" />
          {descr.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <p>
            См. информацию на сайте{" "}
            <a href={link} target="_blank" rel="noopener noreferrer">
              по ссылке
            </a>
            .
          </p>
          {windowWidth < SWAP_HEADING ? (
            <div className={classes["article-btns"]}>
              <div className={classes.article__btn}>
                <Button isCancel value={"Следующая статья"} />
              </div>
            </div>
          ) : (
            <div className={classes["article-btns"]}>
              <div className={classes.article__btn}>
                <Button isCancel value={"Предыдущая"} />
              </div>
              <div className={classes.article__btn}>
                <Button isCancel value={"Следующая"} />
              </div>
            </div>
          )}
        </article>
      </Container>
    </main>
  );
};

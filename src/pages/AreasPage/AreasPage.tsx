import React from "react";
import classes from "./AreasPage.module.scss";

import { IAreasData, ISwapHeading } from "../../utils/interfaces/interfaces";
import { AreasItem } from "./AreasItem/AreasItem";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Container } from "../../hoc/Container/Container";

interface AreasPageProps extends ISwapHeading {
  areasData: Array<IAreasData>;
}

export const AreasPage = ({
  SWAP_HEADING,
  windowWidth,
  areasData,
}: AreasPageProps): React.ReactElement => {
  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <section className={classes.areas}>
        <Container>
          <div className={classes["areas-wrap"]}>
            <h1>Области применения</h1>
            <div className={classes.tile}>
              {areasData.map((item) => (
                <AreasItem key={item.id} data={item} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

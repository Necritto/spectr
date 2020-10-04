import React, { useContext } from "react";
import classes from "./AreasPage.module.scss";

import { IAreasData } from "../../utils/interfaces/interfaces";
import { AreasItem } from "./AreasItem/AreasItem";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Container } from "../../hoc/Container/Container";
import { Context } from "../../utils/context/context";

type AreasPageProps = {
  areasData: Array<IAreasData>;
};

export const AreasPage = ({
  areasData,
}: AreasPageProps): React.ReactElement => {
  const { SWAP_HEADING, windowWidth } = useContext(Context);

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

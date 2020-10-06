import React, { useContext } from "react";
import classes from "./TeamPage.module.scss";

import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { TeamPageItem } from "./TeamPageItem/TeamPageItem";
import { Context } from "../../utils/context/context";
import { ITeamData } from "../../utils/interfaces/interfaces";

type TeamPageProps = {
  readonly teamData: ReadonlyArray<ITeamData>;
};

export const TeamPage = ({ teamData }: TeamPageProps): React.ReactElement => {
  const { SWAP_HEADING, windowWidth } = useContext(Context);

  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <section className={classes["team-section"]}>
        <div className={classes.heading}>
          <h1>Команда</h1>
          <p>
            Команда Спектр-М была сформирована при помощи{" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              бизнес-инкубатора InQubit
            </a>{" "}
            и ведущих ученых{" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              Института физики твердого тела
            </a>{" "}
            (ИФТТ){" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              Российской Академии Наук
            </a>{" "}
            (РАН) в 1998 году.
          </p>
          <p>
            Основу команды составляют ученые в области спектроскопии
            комбинационного рассеяния из{" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              Лаборатории неравновесных электронных процессов
            </a>{" "}
            ИФТТ и InQubit менеджеров по развитию бизнеса.
          </p>
        </div>
        <div className={classes.team}>
          {teamData.map((item) => (
            <TeamPageItem key={item.id} data={item} />
          ))}
        </div>
      </section>
      <section className={classes.jurist}>
        <div className={classes.jurist__item}>
          <p>
            Юридическое сопровождение компании осуществляется компанией{" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              GREENBERG, WHITCOMBE & TAKEUCHI, LLP
            </a>
          </p>
        </div>
        <div className={classes.jurist__item}>
          <p>
            Защита интеллектуальной собственности осуществляется{" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              Greenberg Traurig LLP
            </a>
            , одной из крупнейших юридических компаний США
          </p>
        </div>
      </section>
    </main>
  );
};

import React from "react";
import classes from "./TeamPageItem.module.scss";

import { Line } from "../../../components/UI/Line/Line";
import { ITeamData } from "../../../utils/interfaces/interfaces";

type TeamPageItemProps = {
  readonly data: ITeamData;
};

export const TeamPageItem = ({
  data,
}: TeamPageItemProps): React.ReactElement => {
  return (
    <>
      <article className={classes.team__item}>
        <div className={classes.heading}>
          <div className={classes.team__img}>
            <img src={data.imgUrl} alt={data.name} />
          </div>
          <div className={classes.team__name}>
            <h2>{data.name}</h2>
            <span>{data.position}</span>
          </div>
        </div>
        <div className={classes.descr}>
          <p>{data.descr}</p>
          {data.interests && (
            <p>
              <span>Область научных интересов: </span>
              {data.interests}
            </p>
          )}
        </div>
      </article>
      <Line />
    </>
  );
};

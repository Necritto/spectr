import React from "react";
import { Line } from "../../../components/UI/Line/Line";
import classes from "./TeamPageItem.module.scss";

type TeamPageItemProps = {
  data: {
    id: number;
    imgUrl: string;
    name: string;
    position: string;
    descr: string;
    interests?: string;
  };
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

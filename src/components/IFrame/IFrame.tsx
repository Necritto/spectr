import React from "react";
import classes from "./IFrame.module.scss";

type IFrameProps = {
  readonly src: string;
};

export const IFrame = ({ src }: IFrameProps): React.ReactElement => {
  return (
    <div className={classes.youtube}>
      <iframe
        title="video"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

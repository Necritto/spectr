import { useEffect } from "react";
import ReactDOM from "react-dom";

declare type PortalProps = {
  children: React.ReactNode;
};

export const Portal = ({ children }: PortalProps) => {
  const el: HTMLDivElement = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(el);

    return function unMount(): void {
      document.body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(children, el);
};

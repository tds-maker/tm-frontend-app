import * as React from "react";
import { Button } from "../../../../../../components";

import hi from "../../../../../../assets/images/hi.png";
import marioNvF3D from "../../../../../../assets/images/MarioNvF3D.svg";

export interface IProps {
  onButtonClick?: (e: any) => void;
  firstName?: string;
}
export default (props: IProps) => {
  const clickWelcome = () => {
    if (props.onButtonClick) {
      props.onButtonClick(0);
    }
  };

  return (
    <div className="welcome-box">
      <h1>
        <span>Hello again, {props.firstName}</span> <img src={hi} alt="" />
      </h1>
      <p>
        You are few steps away to create professional datasheets. Just follow
        Super Mario !
      </p>

      <Button id="welcome-button" color="blue" onClick={clickWelcome}>
        Let's start
      </Button>
      <img src={marioNvF3D} className="welcome-img" alt="" />
    </div>
  );
};

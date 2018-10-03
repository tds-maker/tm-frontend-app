import * as React from "react";
import { Button } from "../../../../../../components";

interface IProps {
  onButtonClicked?: (index: number) => void;
}

export default ({ onButtonClicked }: IProps) => {
  const getStarted = () => {
    if (onButtonClicked) {
      onButtonClicked(1);
    }
  };

  return (
    <div>
      <div className="tab-col">
        <h3>Start from scratch</h3>
        <p>Start with a blank page and design new template.</p>
        <Button id="get-started" color="blue" onClick={getStarted}>
          Get Started
        </Button>
      </div>
      <div className="tab-col">
        <h3>Pick a ready one</h3>
        <p>Choose and customize one of our ready-to-use templates.</p>
        <Button color="yellow" style={{ marginTop: "13px" }}>
          Have a look!
        </Button>
      </div>
    </div>
  );
};

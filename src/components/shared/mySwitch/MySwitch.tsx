import React, { useEffect, useState } from "react";
import "./mySwitch.scss";

export interface MySwitchProps {
  enabled: boolean;
  onClick?: () => void;
}

function MySwitch({ enabled, onClick }: MySwitchProps) {
  const [enableSwitch, setEnableSwitch] = useState<boolean>(enabled);

  useEffect(() => {
    setEnableSwitch(enabled ? enabled : false);
  }, [enabled]);

  const clickHandler = () => {
    setEnableSwitch((prevState) => !prevState);
    if (onClick) onClick();
  };

  return (
    <div className="my-switch" onClick={clickHandler}>
      <div
        className={`my-switch__knob ${
          enableSwitch ? " my-switch__knob--active" : ""
        }`}
      />
    </div>
  );
}

export default MySwitch;

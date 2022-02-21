import React, { useState } from 'react';
import './myCheckbox.scss';

export interface MySwitchProps {
  flagged: boolean,
  onClick: () => void
}

function MySwitch({ flagged, onClick }:MySwitchProps ) {
  const [checked, setChecked] = useState<boolean>(flagged);
  return (
    <div 
        onClick={ () => onClick()}
        className={`my-checkbox ${checked ? ' my-checkbox--checked' : ''}`}
      />
  );
}

export default MySwitch;

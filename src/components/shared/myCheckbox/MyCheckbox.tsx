import React from 'react';
import './myCheckbox.scss';

export interface MySwitchProps {
  flagged: boolean,
  onClick: () => void
}

function MySwitch({ flagged, onClick }:MySwitchProps ) {
  return (
    <div 
        onClick={ () => onClick()}
        className={`my-checkbox ${flagged ? ' my-checkbox--checked' : ''}`}
      />
  );
}

export default MySwitch;
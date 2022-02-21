import React from 'react';
import './myButton.scss';

export interface MyButtonhProps {
  label: string,
  onClick: () => void,
  disabled?: boolean
}

function MyButton({label, onClick, disabled}: MyButtonhProps) {
  return (
    <button disabled={disabled} className='my-button' onClick={() => onClick()}>
      <span className='my-button__label'>{label}</span>
    </button>
  );
}

export default MyButton;

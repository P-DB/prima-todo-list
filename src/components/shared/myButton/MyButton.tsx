import React from 'react';
import './myButton.scss';

export interface MyButtonhProps {
  type?: 'DEFAULT' | 'SUCCESS'
  label: string,
  onClick: () => void,
  disabled?: boolean
}

function MyButton({label, onClick, disabled, type}: MyButtonhProps) {

  let classList = 'my-button';
  classList += ` ${type === "SUCCESS" ? "my-button--success" : '' }`;
  
  return (
    <button disabled={disabled} className={classList} onClick={() => onClick()}>
      <span className='my-button__label'>{label}</span>
    </button>
  );
}

export default MyButton;

import React from 'react';
import ItemCounter from '../itemCounter/ItemCounter';
import './sidebarItem.scss';

export interface SidebarItemProps {
  icon: JSX.Element,
  label: string,
  selected?: boolean, 
  showCounter?: boolean
}

function Sidebar({icon, label, selected, showCounter}: SidebarItemProps) {

  let classList = 'sidebar-item';
  classList += selected ? ` sidebar-item--selected` : '';

  return (
    <li className={classList}>
      <div className='sidebar-item__label'>
        <div className='sidebar-item__icon'>{icon}</div>
        <p>{label}</p>
      </div>
      {showCounter ? <ItemCounter /> : <></>}
    </li>
  );
}

export default Sidebar;

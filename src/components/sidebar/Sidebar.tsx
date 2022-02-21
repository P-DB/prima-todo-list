import React from 'react';
import SidebarItem, { SidebarItemProps } from './components/sidebarItem/SidebarItem';
import './sidebar.scss';

import {ReactComponent as IconDashboard} from 'assets/icons/icon-dashboard.svg';
import {ReactComponent as IconCalendar} from 'assets/icons/icon-calendar.svg';
import {ReactComponent as IconCharts} from 'assets/icons/icon-charts.svg';
import {ReactComponent as IconSettings} from 'assets/icons/icon-settings.svg';
import {ReactComponent as IconTeams} from 'assets/icons/icon-teams.svg';

interface SidebarProps {
  
}

function Sidebar(props:SidebarProps) {

  const menuItems: SidebarItemProps[] = [
    {
      label: 'Dashboard',
      icon: <IconDashboard />,
      selected: true,
      showCounter: true
    },
    {
      label: 'Calendar',
      icon:  <IconCalendar />
    },
    {
      label: 'Teams',
      icon:  <IconTeams />
    },
    {
      label: 'Chart',
      icon:  <IconCharts />
    },
    {
      label: 'Settings',
      icon:  <IconSettings />
    }
  ]; 

  return (
    <aside className="sidebar">
        <h1>MyTrack</h1>
        <ul>
          {menuItems.map(({icon, label, selected, showCounter}, i) => (
            <SidebarItem key={label + i} icon={icon} label={label} selected={selected} showCounter={showCounter} />)
          )}
        </ul>
    </aside>
  );
}

export default Sidebar;

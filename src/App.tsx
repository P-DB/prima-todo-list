import React from 'react';
import Modal from 'react-modal';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dasbboard';
import './app.scss';

Modal.setAppElement('#root');

function App() {
  return (
    <div className="app">
      <Dashboard />
      <Sidebar />
    </div>
  );
}

export default App;

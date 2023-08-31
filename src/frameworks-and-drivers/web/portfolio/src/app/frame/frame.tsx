import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './navigation/navigation';
import './frame.scss';
import { Header } from './header/header';
export const Frame: React.FunctionComponent = () => {
  return (
    <div className="frame">
      <div className="content">
        <Navigation />
        <main className="main-body">
          <Header />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

import React from 'react';
import './navigation.scss';
export const Navigation: React.FunctionComponent = () => {
  return (
    <nav className="navigation">
      <span className="navigation_logo">
        K<span>.</span>
      </span>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#exp">Exp.</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

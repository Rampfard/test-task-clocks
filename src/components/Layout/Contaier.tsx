import React from 'react';
import classes from './Container.module.css';

const Contaier: React.FC = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Contaier;

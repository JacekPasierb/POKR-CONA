import React from 'react';
import css from "./Line.module.css";

const Line = ({color}) => {
  return (
    
      <div className={css.line} style={{ backgroundColor: `${color}` }}></div>
    
  );
}

export default Line;
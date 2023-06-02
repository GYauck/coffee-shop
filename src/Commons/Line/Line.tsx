import React from "react";
import style from "./line.module.css";

const Line = (color:any) => {
  return (
    <div className={style.howLineContainer}>
      <div className={style.howLine}> </div>
      <div className={style.howCircle} style={{backgroundColor : color.color}}> </div>
      <div className={style.howCircle} style={{backgroundColor : color.color}}> </div>
      <div className={style.howCircle} style={{backgroundColor : color.color}}> </div>
    </div>
  );
};

export default Line;

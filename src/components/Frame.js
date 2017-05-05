import React from "react";
import Roll from "./Roll";

const Frame = props => (
   <div>
      <span>Frame {props.frame === 10 ? `Bonus` : props.frame + 1}: </span>
      <Roll {...props} rollIndex={0} />
      <Roll {...props} rollIndex={1} />
   </div>
);

export default Frame;

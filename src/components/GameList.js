import React from "react";

const GameList = ({ title, children }) => (
   <div>
      <h3>{title}</h3>
      <hr />
      <div>{children}</div>
   </div>
);

export default GameList;

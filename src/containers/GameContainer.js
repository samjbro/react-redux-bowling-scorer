import React from "react";
import { connect } from "react-redux";
import Game from "../components/Game";
import Frame from "../components/Frame";
import { changeRoll } from "../actions";

let GameContainer = ({ frames, handleInput, id, score }) => (
   <div>
      <form
         onSubmit={e => {
            e.preventDefault();
            console.log("form submitted");
         }}>
         {frames.map(frame => (
            <Frame
               rolls={frame}
               handleInput={handleInput}
               gameId={id}
               frame={frames.indexOf(frame)}
               key={frames.indexOf(frame)}
            />
         ))}
      </form>
      <strong>Score: {score}</strong>
   </div>
);

const mapDispatchToProps = {
   handleInput: changeRoll
};

GameContainer = connect(undefined, mapDispatchToProps)(GameContainer);
export default GameContainer;

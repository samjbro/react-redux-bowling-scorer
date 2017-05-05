import React from "react";

const Roll = ({
   handleInput,
   gameId,
   frame,
   rollIndex,
   currentValue,
   rolls
}) => {
   let input;
   return (
      <input
         defaultValue={rolls[rollIndex]}
         ref={node => {
            input = node;
         }}
         onChange={() => {
            if (input.value < 0) input.value = 0;
            const otherRoll = rollIndex === 0 ? 1 : 0;
            const maxRoll = 10 - rolls[otherRoll];
            if (frame != 10) {
               if (input.value > maxRoll) input.value = maxRoll;
            }
            if (input.value > 10) input.value = 10;
            handleInput(gameId, frame, rollIndex, input.value);
         }}
      />
   );
};

export default Roll;

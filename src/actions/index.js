export const changeRoll = (gameId, frame, index, roll) => ({
   type: "CHANGE_ROLL",
   gameId,
   frame,
   index: parseInt(index),
   roll: parseInt(roll) || 0
});

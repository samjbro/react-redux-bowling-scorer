const sampleGame = {
   id: 111,
   frames: [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
   ],
   score: 0
};

const calculateScore = frames => {
   let score = 0;
   for (let i = 0; i < 10; i++) {
      const frame = frames[i];
      const frameTotal = frame[0] + frame[1];
      let bonus = 0;
      if (frame[0] === 10) {
         bonus += strikeBonus(frames, i);
      } else if (frameTotal === 10) {
         bonus += frames[i + 1][0];
      }
      score += frameTotal + bonus;
   }
   return score;
};

const strikeBonus = (frames, frameIndex) => {
   const nextFrame = frames[frameIndex + 1];
   const firstBonus = nextFrame[0];
   const secondBonus = firstBonus === 10 && frameIndex !== 9
      ? frames[frameIndex + 2][0]
      : nextFrame[1];
   return firstBonus + secondBonus;
};

const game = (state, action) => {
   switch (action.type) {
      case "CHANGE_ROLL":
         if (state.id !== action.gameId) {
            return state;
         }
         state.frames[action.frame][action.index] = action.roll;
         state.score = calculateScore(state.frames);
         return state;
   }
};

const games = (state = [sampleGame], action) => {
   switch (action.type) {
      case "CHANGE_ROLL":
         return state.map(g => game(g, action));
      default:
         return state;
   }
};

export default games;

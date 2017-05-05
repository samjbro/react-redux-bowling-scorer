import React from "react";
import { connect } from "react-redux";
import GameList from "../components/GameList";
import GameContainer from "./GameContainer";

let GameListContainer = ({ games }) => (
   <div>
      <GameList title="Games">
         {games.map(game => <GameContainer {...game} key={game.id} />)}
      </GameList>
   </div>
);

const mapStateToProps = state => ({
   games: state.games
});

GameListContainer = connect(mapStateToProps)(GameListContainer);

export default GameListContainer;

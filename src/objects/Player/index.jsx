import React from "react";
import PlayerX from '../../images/X.png';
import PlayerO from '../../images/Circle.png';
import './style.css';

const Player = ({player}) => {
const players = [];
players['x'] = PlayerX;
players['o'] = PlayerO;
    return(
    <button className="player">
        <img src={players[player]} alt= {`Jogador ${player.toUpperCase()}`} />
    </button>
    )
}
export default Player
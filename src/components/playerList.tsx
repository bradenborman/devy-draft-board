import React from 'react';
import { Player } from './bigBoard';

interface PlayerListProps {
    playerPool: Player[];
    addPlayerToNextOpenSpot: (player: Player) => void;
}

const PlayerList: React.FC<PlayerListProps> = ({ playerPool, addPlayerToNextOpenSpot }) => {
    return (
        <div className="player-list">
            <ul>
                {playerPool.length === 0 ? (
                    <li className="empty-list">No players left</li>
                ) : (
                    playerPool.map((player, index) => (
                        <li key={index} className="player-entry">
                            <span className="player-position">{player.position}</span>
                            <span className="player-name">{player.name}</span>
                            <button
                                className="add-btn"
                                onClick={() => addPlayerToNextOpenSpot(player)}
                            >
                                +
                            </button>
                            
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default PlayerList;

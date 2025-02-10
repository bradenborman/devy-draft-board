import React from 'react';
import { Player } from './bigBoard';

interface DraftSpotProps {
    player: Player | null;
    row: number;
    col: number;
}

const DraftSpot: React.FC<DraftSpotProps> = ({ player, row, col }) => {
    return (
        <div className="draft-spot">
            {player ? (
                <>
                    <p className="slot">{`${row}.${col}`}</p>
                    <p className="name">{player.name}</p>
                    <p className={`position ${player.position}`}>{player.position}</p>
                    <p className="team">{player.team}</p>
                </>
            ) : (
                <div className="slot empty">
                    <p>{`${row}.${col}`}</p>
                </div>
            )
            }
        </div >
    );
};

export default DraftSpot;

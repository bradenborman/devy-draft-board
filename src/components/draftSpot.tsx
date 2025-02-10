import React from 'react';

interface DraftSpotProps {
    player: string | null;
    row: number;
    col: number;
}

const DraftSpot: React.FC<DraftSpotProps> = ({ player, row, col }) => {
    return (
        <div className="draft-spot">
            {player ? `${row}.${col} - ${player}` : `${row}.${col}`}
        </div>
    );
};

export default DraftSpot;
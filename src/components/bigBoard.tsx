import React, { useState } from 'react';
import DraftSpot from './draftSpot';

interface BigBoardProps {
    teams: number;
    rounds: number;
}

const BigBoard: React.FC<BigBoardProps> = ({ teams, rounds }) => {
    const [players, setPlayers] = useState<(string | null)[][]>(
        Array.from({ length: rounds }, () => Array(teams).fill(null))
    );

    return (
        <div
            className="big-board"
            style={{ '--teams': teams, '--rounds': rounds } as React.CSSProperties}
        >
            {Array.from({ length: rounds }).map((_, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {Array.from({ length: teams }).map((_, colIndex) => (
                        <DraftSpot
                            key={colIndex}
                            player={players[rowIndex][colIndex]}
                            row={rowIndex + 1}
                            col={colIndex + 1}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default BigBoard;

import React from 'react';
import DraftSpot from './draftSpot';

export interface Player {
    name: string;
    position: string;
    age: number;
    team: string;
    year: number;
}

interface BigBoardProps {
    teams: number;
    rounds: number;
    players: (Player | null)[][];
    addPlayerToSpot: (row: number, col: number, player: Player) => void; /* used with drag and drop later */
}

const BigBoard: React.FC<BigBoardProps> = ({ teams, rounds, players }) => {
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
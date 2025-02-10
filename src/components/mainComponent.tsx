import React, { useState } from 'react';
import BoardParameters from './boardParametes';
import BigBoard, { Player } from './bigBoard';

const MainComponent: React.FC = () => {
    const [teams, setTeams] = useState<number>(12);
    const [rounds, setRounds] = useState<number>(3);
    const [isGridCreated, setIsGridCreated] = useState<boolean>(false);
    const [players, setPlayers] = useState<(Player | null)[][]>(
        Array.from({ length: 3 }, () => Array(12).fill(null))
    );

    const handleTeamsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTeams(Number(e.target.value));
    };

    const handleRoundsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRounds(Number(e.target.value));
    };

    const createGrid = () => {
        console.log('Creating grid with', teams, 'teams and', rounds, 'rounds');
        setPlayers(Array.from({ length: rounds }, () => Array(teams).fill(null))); // Reset grid size
        setIsGridCreated(true);
    };

    const addPlayerToSpot = (row: number, col: number, player: Player) => {
        const updatedPlayers = [...players];
        updatedPlayers[row - 1][col - 1] = player;
        setPlayers(updatedPlayers);
    };

    return (
        <div className={`main-component ${!isGridCreated ? 'center-content' : ''}`}>
            {!isGridCreated ? (
                <BoardParameters
                    teams={teams}
                    rounds={rounds}
                    handleTeamsChange={handleTeamsChange}
                    handleRoundsChange={handleRoundsChange}
                    createGrid={createGrid}
                />
            ) : (
                <BigBoard rounds={rounds} teams={teams} players={players} addPlayerToSpot={addPlayerToSpot} />
            )}
        </div>
    );
};

export default MainComponent;
import React, { useState } from 'react';
import BigBoard, { Player } from './bigBoard';
import PlayerList from './playerList';
import BoardParameters from './boardParametes';

const initialPlayerPool: Player[] = [
    { name: "Caleb Williams", position: "QB", age: 22, team: "USC" },
    { name: "Drake Maye", position: "QB", age: 21, team: "UNC" },
    { name: "Marvin Harrison Jr.", position: "WR", age: 21, team: "Ohio State" },
    { name: "Malik Nabers", position: "WR", age: 21, team: "LSU" },
    { name: "TreVeyon Henderson", position: "TE", age: 21, team: "Ohio State" }
];

const MainComponent: React.FC = () => {
    const [teams, setTeams] = useState<number>(12);
    const [rounds, setRounds] = useState<number>(3);
    const [isGridCreated, setIsGridCreated] = useState<boolean>(false);
    const [players, setPlayers] = useState<(Player | null)[][]>([]);
    const [playerPool, setPlayerPool] = useState<Player[]>(initialPlayerPool);

    const createGrid = () => {
        setPlayers(Array.from({ length: rounds }, () => Array(teams).fill(null)));
        setIsGridCreated(true);
    };

    const addPlayerToNextOpenSpot = (player: Player) => {
        setPlayers((prevPlayers) => {
            const updatedPlayers = prevPlayers.map((rowArr) => [...rowArr]);

            for (let r = 0; r < rounds; r++) {
                for (let c = 0; c < teams; c++) {
                    if (!updatedPlayers[r][c]) {
                        updatedPlayers[r][c] = player;
                        setPlayerPool((prevPool) => prevPool.filter((p) => p.name !== player.name));
                        return updatedPlayers;
                    }
                }
            }
            return prevPlayers; // No available spot, return original
        });
    };

    return (
        <div className={`main-component ${!isGridCreated ? 'center-content' : ''}`}>
            {!isGridCreated ? (
                <BoardParameters
                    teams={teams}
                    rounds={rounds}
                    handleTeamsChange={(e) => setTeams(Number(e.target.value))}
                    handleRoundsChange={(e) => setRounds(Number(e.target.value))}
                    createGrid={createGrid}
                />
            ) : (
                <div className="board-container">
                    <PlayerList playerPool={playerPool} addPlayerToNextOpenSpot={addPlayerToNextOpenSpot} />
                    <BigBoard rounds={rounds} teams={teams} players={players} addPlayerToSpot={() => { }} />
                </div>
            )}
        </div>
    );
};

export default MainComponent;
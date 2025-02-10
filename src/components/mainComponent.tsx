import React, { useState } from 'react';
import BoardParameters from './boardParametes';
import BigBoard from './bigBoard';

const MainComponent: React.FC = () => {
    const [teams, setTeams] = useState<number>(12);
    const [rounds, setRounds] = useState<number>(3);
    const [isGridCreated, setIsGridCreated] = useState<boolean>(false);

    const handleTeamsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTeams(Number(e.target.value));
    };

    const handleRoundsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRounds(Number(e.target.value));
    };

    const createGrid = () => {
        console.log('Creating grid with', teams, 'teams and', rounds, 'rounds');
        setIsGridCreated(true);
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
                <BigBoard rounds={rounds} teams={teams} />
            )}
        </div>
    );
};

export default MainComponent;
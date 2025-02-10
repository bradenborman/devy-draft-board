import React from 'react';

interface BoardParamsProps {
    teams: number;
    rounds: number;
    handleTeamsChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleRoundsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    createGrid: () => void;
}

const BoardParameters: React.FC<BoardParamsProps> = ({ teams, rounds, handleTeamsChange, handleRoundsChange, createGrid }) => {
    return (
        <div className="board-parameters">
            <h3>{new Date().getUTCFullYear()} Devy/Rookie Draft Big Board</h3>

            <label>
                Teams:
                <select value={teams} onChange={handleTeamsChange}>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                </select>
            </label>
            <br />

            <label>Rounds: {rounds}</label>
            <input
                type="range"
                value={rounds}
                onChange={handleRoundsChange}
                min="1"
                max="15"
                step="1"
            />
            <button onClick={createGrid}>Create Grid</button>
        </div>
    );
};

export default BoardParameters;
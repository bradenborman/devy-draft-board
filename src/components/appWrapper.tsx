import React from 'react';
import PlayerList from './playerList';
import MainComponent from './mainComponent';

const AppWrapper: React.FC = () => {
    return (
        <div className='app-wrapper'>
            <PlayerList />
            <MainComponent />
        </div>
    );
};

export default AppWrapper;

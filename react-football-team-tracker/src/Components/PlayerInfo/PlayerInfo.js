import { Button } from 'react-bootstrap';
import React from 'react';
import './PlayerInfo.css';

const PlayerInfo = (props) => {
    const { idTeam, strTeam, intFormedYear, strLeague, strStadium, strTeamBadge, } = props.team;
    return (
        <div className="container">
            <div className="team-categories">
                <div className="team-info">
                    <img src={strTeamBadge} alt="" />
                    <h5>{strTeam}</h5>
                    <small>Sports Type: FootBall</small>
                    <div className="main-btn">
                        <Button variant="primary">Explore</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerInfo;
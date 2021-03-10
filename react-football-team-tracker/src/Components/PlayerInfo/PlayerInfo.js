import { Button } from 'react-bootstrap';
import React from 'react';
import './PlayerInfo.css';
import { useHistory } from 'react-router';

const PlayerInfo = (props) => {
    const { idTeam, strTeam, strTeamBadge } = props.team;
    const history = useHistory();
    const showInformation = id =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        history.push(url);
    }
    return (
        <div className="container">
            <div className="team-categories">
                <div className="team-info">
                    <img src={strTeamBadge} alt="" />
                    <h5>{strTeam}</h5>
                    <small>Sports Type: FootBall</small>
                    <div className="main-btn">
                        <Button onClick={()=> showInformation(idTeam)} variant="primary">Explore</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerInfo;
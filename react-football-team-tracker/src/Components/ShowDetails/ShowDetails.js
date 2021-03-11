import React from 'react';
import './ShowDetails.css'

const ShowDetails = (props) => {
    const { strTeam, intFormedYear, strLeague, strStadium, strCountry,strDescriptionEN  , strTeamBanner, strGender } = props.playerInfo
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 main-card">
                    <h5>{strTeam}</h5>
                    <h5>{strLeague}</h5>
                    <h5>{strStadium}</h5>
                    <h5>{intFormedYear}</h5>
                    <h5>{strCountry}</h5>
                    <h5>{strGender}</h5>
                </div>
                <div className="col-md-5 img-banner">
                    <img src={strTeamBanner} alt="" />
                </div>
            </div>
            <div className="para-div">
            <p>{strDescriptionEN }</p>
            </div>
        </div>
    );
};

export default ShowDetails;

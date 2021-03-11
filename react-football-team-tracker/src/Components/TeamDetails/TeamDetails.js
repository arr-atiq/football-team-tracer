import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';

const TeamDetails = () => {
    const {idTeam} = useParams();
    // console.log({idTeam});
    const [info, setInfo] = useState({});
    console.log(info);
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setInfo(data.teams))
    },[idTeam])
    return (
        <div>
            <h5>i have got it : {idTeam}</h5>
        </div>
    );
};

export default TeamDetails;
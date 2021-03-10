import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';

const TeamDetails = () => {
    const {id} = useParams();
    const [info, setInfo] = useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setInfo(data.teams))
    },[id])
    return (
        <div>
            <h5>i have got it : {info.strLeague}</h5>
        </div>
    );
};

export default TeamDetails;
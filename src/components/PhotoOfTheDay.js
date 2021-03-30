import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { API_KEY } from '../constants';

import './photoOfTheDay.css';

export default function PhotoOfTheDay() {

    const [podData, setPodData] = useState(null);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            .then(res => {
                setPodData(res.data);
            })
            .catch(err => {
                console.log(err.data);
            })
    })

    return (
        !podData ? <h3>Loading...</h3> :
        <div className='container'>
            <img src={`${podData.hdurl}`} alt='nasa img' style={{height: '80vh'}} />
            <section className='image-info-container'>
                <h1>{`${podData.title}`}</h1>
                <p>{`${podData.explanation}`}</p>
                <p>{`Date of photo: ${podData.date}`}</p>
                <p>{`Copyright: ${podData.copyright}`}</p>
            </section>
        </div>
    )
}
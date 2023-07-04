import React, { useEffect, useState } from 'react'
import './Banner.css'
// import { movie } from '../api'

function Banner() {
    const [path, setPath] = useState('')
    const [title, setTitle] = useState('')
    const [overview, setDescription] = useState('')
    const [movie, setMovie] = useState('')
    function showDisc(string, n) {
        return string.length > n ? string.substr(0, n-1) + ' ......' : string;
    }

    useEffect(()=> {
        let rand = Math.floor(Math.random() * 3)
        let url
        // console.log(rand)
        if(rand == 0) {
            url = 'https://api.themoviedb.org/3/trending/all/week?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US'
        } else if (rand == 1) {
            url = 'https://api.themoviedb.org/3/discover/tv?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US'
        } else {
            url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US'
        }
        fetch(url)
        .then(res => res.json())
        .then(res => {
            const data = res.results[Math.floor(Math.random() * 20 - 1)]
            console.log( data )
            setPath(data.backdrop_path)
            setTitle(data.original_title)
            setDescription(data.overview)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
  return (
    <header className='banner'
        style={{
            backgroundImage:`url(https://image.tmdb.org/t/p/original${path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundColor: 'black'
        }}
    >
        <div className="banner__contents">
            <h1 className="banner__title">{ title}</h1>
            <div className="banner__buttons">
                <button className="banner__btn"><i className="fa-solid fa-play"></i>Play</button>
                <button className="banner__btn"><i className="fa-solid fa-plus"></i>My List</button>
            </div>
            <h2 className="banner__description">
               { showDisc(`${overview}`, 100)}
            </h2>
        </div>
        <div className="banner__fade" />
    </header>
  )
}

export default Banner
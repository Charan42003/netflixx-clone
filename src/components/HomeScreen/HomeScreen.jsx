import React, { useState } from 'react'
import './HomeScreen.css'
import NavBar from './components/navBar/NavBar'
import Banner from './components/banner/Banner'
import Row from './components/row/Row'

function HomeScreen() {
  return (
    <>
        <NavBar />
        <Banner />
        <div style={{height:'40px'}} />
        <Row 
          isPoster={true}   
          title={'Netflix Originals'} 
          url={'https://api.themoviedb.org/3/discover/tv?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US'} 
          />
        <Row 
            isPoster={false} 
            title={'Trending'} 
            url={'https://api.themoviedb.org/3/trending/all/week?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US'}
        />
        <Row 
            isPoster={false} 
            title={'Action Movies'} 
            url={'https://api.themoviedb.org/3/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=28'}
        />
        <Row 
          isPoster={false}
          title={'Top Rated'} 
          url={'https://api.themoviedb.org/3/movie/top_rated?api_key=46215e7a348c1e43ff4428f4031f04fa&language=en-US'} 
        />
        <Row 
          isPoster={false}
          title={'Comedy'} 
          url={'https://api.themoviedb.org/3/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=35'} 
        />
        <Row 
          isPoster={false}
          title={'Horror'} 
          url={'https://api.themoviedb.org/3/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=37'} 
        />
        <Row 
          isPoster={false}
          title={'Romance'} 
          url={'https://api.themoviedb.org/3/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=10749'} 
        />
        <Row 
          isPoster={false}
          title={'Documentaries'} 
          url={'https://api.themoviedb.org/3/discover/movie?api_key=46215e7a348c1e43ff4428f4031f04fa&with_genres=99'} 
        />
        <hr
          style={{
            width: '30%',
            border: 'none',
            borderTop: '1px double #eee',
            margin: '0 auto'
          }}
        />
        <h3 style={{
          color: "white",
          textAlign:"center", 
          marginTop: '30px', 
          marginBottom: '40px', 
          fontWeight: 400, 
          letterSpacing: '2px'
          }}>
            Cloned By Charan Raj
        </h3>
    </>
  )
}

export default HomeScreen
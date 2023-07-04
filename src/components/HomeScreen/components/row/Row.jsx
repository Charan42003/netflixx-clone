import React, { useEffect, useState } from 'react'
import './Row.css'

function Row(props) {
    const [data, setData] = useState('')
    useEffect(()=> {
        fetch(`${props.url}`)
        .then(res => res.json())
        .then(res => {
            setData(res.results)
        })
    }, [])
  return (
    <div className='row'>
        <h2 style={{color: 'white'}}>{props.title}</h2>
        <br/>
        <div className="row_wrapper">
        {
            Array.isArray(data) ? 
                data.map(x => (
                    <>
                        <img
                        src={(props.isPoster)?
                            `https://image.tmdb.org/t/p/original${x.poster_path}`
                            : `https://image.tmdb.org/t/p/original${x.backdrop_path}`} 
                        className={`card ${(props.isPoster)? 'poster_img': 'backdrop_img'}`}
                        />
                    </>
                ))
            :
            <h3 style={{paddingLeft: 50}}>Loading....</h3>
        }
        </div>
    </div>
  )
}

export default Row
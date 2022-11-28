import axios from 'axios';
import React, { useEffect, useState } from 'react'


export const RandomBeer = () => {
  const [beer, setBeer] = useState(null);



  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(({ data }) => {
        setBeer(data)
      })
      .catch(
        (error) => { console.log(error) }
      )
  }, [])
  return (
    <>
      {beer ? <div>
        < h2 > {beer.name}</h2 >
        <img src={beer.image_url} alt={beer.name} />
        <p>{beer.tagline}</p>
        <p>{beer.contributed_by}</p>
      </div > : <p>Loading...</p>}
    </>
  )
}

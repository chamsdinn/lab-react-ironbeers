import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const OneBeer = () => {
  const [beer, setBeer] = useState(null);
  const params = useParams();
  const beerId = params.beerId

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
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
        <h2> {beer.name}</h2>
        <img src={beer.image_url} alt={beer.name} />
        <p>{beer.tagline}</p>
        <p>{beer.contributed_by}</p>
      </div > : <p>Loading...</p>}
    </>
  )
}

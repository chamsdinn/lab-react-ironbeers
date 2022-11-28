import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Beers = () => {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(({ data }) => {
        setBeers(data)
      })
      .catch(
        (error) => { console.log(error) }
      )
  }, [])
  return (
    <div>
      <h2>All Beers</h2>

      {beers.map(beer => {
        return <div key={beer._id}>
          <h2>{beer.name}</h2>
          <img src={beer.image_url} alt={beer.name} />
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>More Details</Link>
        </div>
      })}
    </div>
  )
}

export default Beers
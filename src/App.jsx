import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, NavLink } from "react-router-dom"
import axios from 'axios';
import HomePage from './Pages/HomePage';
import Beers from './Pages/Beers';
import { RandomBeer } from './Pages/RandomBeer';
import NewBeer from './Pages/NewBeer';
import { OneBeer } from './Pages/OneBeer';
import Layout from './components/Layout';
function App() {
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
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path='/beers' element={<Beers />} />
          <Route path='/beers/:beerId' element={<OneBeer />} />
          <Route path='/random-beer' element={<RandomBeer />} />
          <Route path='/new-beer' element={<NewBeer setBeers={setBeers} />} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;

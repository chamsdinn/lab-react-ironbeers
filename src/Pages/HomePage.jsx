import React from 'react'
import { Link } from 'react-router-dom'
import beersImg from "../assets/beers.png"
import randomBeerImg from "../assets/random-beer.png"
import newBeerImg from "../assets/random-beer.png"

const HomePage = () => {
  return (
    <div>
    
        <Link to = "/beers">
            <img src={beersImg} alt="" />
            <h2>All Beers</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, culpa reiciendis. Eligendi autem sed perspiciatis accusamus tempora sapiente uam maiores optio magnam dolorum quas, corporis unde nesciunt saepe sunt id?</p>
        
        </Link>
        <Link to = "/random-beer">
            <img src={randomBeerImg} alt="" />
            <h2>Random Beer</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam dolore dignissimos expedita at tenetur iure doloremque, numquam cupiditate! Consequuntur aperiam quas velit nemo delectus quidem impedit sapiente maxime repellat accusantium?</p>
        </Link>
        <Link to = "/new-beer">
            <img src={newBeerImg} alt=""/>
            <h2>NewBeer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officia id perspiciatis eveniet aliquid incidunt exercitationem blanditiis laborum cum alias sunt dolores fugiat magnam autem saepe, quae ullam animi dolor.</p>
        </Link>
    
    
    </div>
  )
}

export default HomePage
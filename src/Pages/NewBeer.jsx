import React, { useState } from 'react'
import axios from 'axios'


const NewBeer = () => {
  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [firstbrewed, setFirstBrewed] = useState('')
  const [brewerstips, setBrewersTips] = useState('')
  const [attenuationlevel, setAttenuationLevel] = useState(0)
  const [contributedby, setContributedBy] = useState('')
  const [errorMessage, setErrorMessage] = useState("")


  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!name || !tagline || !description || !firstbrewed || !brewerstips || !attenuationlevel || !contributedby) {
      setErrorMessage("All fields are mandatory !")
      setTimeout(() => {
        setErrorMessage("")
      }, 5000)
    }
    try {
      const { data } = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        first_brewed: firstbrewed,
        brewers_tips: brewerstips,
        attenuation_level: parseFloat(attenuationlevel),
        contributed_by: contributedby,
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    setName('')
    setTagline('')
    setDescription('')
    setFirstBrewed('')
    setBrewersTips('')
    setAttenuationLevel(0)
    setContributedBy('')
  }


  const handleNameChange = ({ target: { value } }) => {
    setName(value)
  }
  const handleTaglineChange = ({ target: { value } }) => {
    setTagline(value)
  }
  const handleDescriptionChange = ({ target: { value } }) => {
    setDescription(value)
  }
  const handleFirstbrewedChange = ({ target: { value } }) => {
    setFirstBrewed(value)
  }
  const handleBrewerstipsChange = ({ target: { value } }) => {
    setBrewersTips(value)
  }
  const handleAttenuationlevelChange = ({ target: { value } }) => {
    setAttenuationLevel(value)
  }
  const handleContributedbyChange = ({ target: { value } }) => {
    setContributedBy(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="tagline">Tagline:</label>
        <input
          type="text"
          id="tagline"
          value={tagline}
          onChange={handleTaglineChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <label htmlFor="firstbrewed">First Brewed:</label>
        <input
          type="text"
          id="firstbrewed"
          value={firstbrewed}
          onChange={handleFirstbrewedChange}
        />
      </div>
      <div>
        <label htmlFor="brewerstips">Brewer's Tips:</label>
        <input
          type="text"
          id="brewerstips"
          value={brewerstips}
          onChange={handleBrewerstipsChange}
        />
      </div>
      <div>
        <label htmlFor="attenuationlevel">Attenuation Level:</label>
        <input
          type="number"
          id="attenuationlevel"
          value={attenuationlevel}
          onChange={handleAttenuationlevelChange}
        />
      </div>
      <div>
        <label htmlFor="contributedby">Contributed By:</label>
        <input
          type="text"
          id="contributedby"
          value={contributedby}
          onChange={handleContributedbyChange}
        />
      </div>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <input type="submit" value="Add New" />
    </form>
  )
}

export default NewBeer
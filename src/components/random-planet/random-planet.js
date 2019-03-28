import React, { Component } from "react"
import SwapiService from "../../services/swapi-service"
import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator"

import "./random-planet.scss"

export default class RandomPlanet extends Component {
  swapiService = new SwapiService()

  state = {
    planet: {},
    loading: true,
    error: false
  }

  interval

  componentDidMount() {
    this.updatePlanet()
    this.interval = setInterval(() => this.updatePlanet(), 3000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet: { ...planet },
      loading: false
    })
  }
  onError = err => {
    this.setState({ error: true, loading: false })
  }

  updatePlanet() {
    // const id = 150
    const id = Math.floor(Math.random() * 10) + 3
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const { planet, loading, error } = this.state

    return (
      <div className="random-planet jumbotron rounded">
        {loading ? (
          <Spinner />
        ) : !error ? (
          <PlanetDetail planet={planet} />
        ) : (
          <ErrorIndicator />
        )}
      </div>
    )
  }
}

const PlanetDetail = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet
  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

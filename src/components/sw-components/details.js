import React from "react"
import { withDataDetails } from "../hoc-helpers"
import ItemDetails, { Record } from "../item-details"
import { withSwapiService, compose } from "../hoc-helpers"

const personChildren = [
  <Record field="gender" label="Gender: " />,
  <Record field="birthYear" label="Birth Year: " />,
  <Record field="eyeColor" label="Eye Color: " />
]
const planetChildren = [
  <Record field="population" label="Population: " />,
  <Record field="rotationPeriod" label="Rotation Period: " />,
  <Record field="diameter" label="Diameter: " />
]
const starshipChildren = [
  <Record field="model" label="Model: " />,
  <Record field="length" label="Length: " />,
  <Record field="costInCredits" label="Cost: " />
]

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}
const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}
const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}

const PersonDetails = compose(
  withSwapiService(mapPersonMethodsToProps),
  withDataDetails(personChildren)
)(ItemDetails)

const PlanetDetails = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withDataDetails(planetChildren)
)(ItemDetails)

const StarshipDetails = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withDataDetails(starshipChildren)
)(ItemDetails)

export { PersonDetails, PlanetDetails, StarshipDetails }

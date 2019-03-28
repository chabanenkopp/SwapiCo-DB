import { withDataLists } from "../hoc-helpers"
import ItemList from "../item-list"
import { withSwapiService, withChildren, compose } from "../hoc-helpers"

const mapPersonMethodToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  }
}
const mapPlanetMethodToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  }
}
const mapStarshipMethodToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  }
}

const renderName = ({ name }) => name

const PersonList = compose(
  withSwapiService(mapPersonMethodToProps),
  withDataLists,
  withChildren(renderName)
)(ItemList)

const PlanetList = compose(
  withSwapiService(mapPlanetMethodToProps),
  withDataLists,
  withChildren(renderName)
)(ItemList)

const StarshipList = compose(
  withSwapiService(mapStarshipMethodToProps),
  withDataLists,
  withChildren(renderName)
)(ItemList)

export { PersonList, PlanetList, StarshipList }

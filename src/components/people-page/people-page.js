import React, { Component } from "react"
import SwapiService from "../../services/swapi-service"
import Row from "../row"
import ErrorBoundry from "../error-boundry"
import { PersonList, PersonDetails } from "../sw-components"

export default class PeoplePage extends Component {
  swapiService = new SwapiService()

  state = { personSelected: 11 }

  onItemSelected = id => {
    this.setState({ personSelected: id })
  }

  render() {
    const { personSelected } = this.state

    const itemList = (
      <ErrorBoundry>
        <PersonList onItemSelected={this.onItemSelected} />
      </ErrorBoundry>
    )

    const personDetails = <PersonDetails itemId={personSelected} />

    return <Row left={itemList} right={personDetails} />
  }
}

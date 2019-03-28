import React, { Component } from "react"
import Row from "../row"
import { PlanetList, PlanetDetails } from "../sw-components"

export default class PlanetsPage extends Component {
  state = { itemSelected: 11 }

  onItemSelected = id => {
    this.setState({ itemSelected: id })
  }

  render() {
    const { itemSelected } = this.state
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={itemSelected} />}
      />
    )
  }
}

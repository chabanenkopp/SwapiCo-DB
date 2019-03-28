import React, { Component } from "react"
import Row from "../row"
import { StarshipList, StarshipDetails } from "../sw-components"

export default class StarshipsPage extends Component {
  state = { itemSelected: 11 }

  onItemSelected = id => {
    this.setState({ itemSelected: id })
  }

  render() {
    const { itemSelected } = this.state
    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={itemSelected} />}
      />
    )
  }
}

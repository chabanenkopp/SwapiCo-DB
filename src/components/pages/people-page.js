import React, { Component } from "react"
import Row from "../row"
import { PersonList, PersonDetails } from "../sw-components"

export default class PeoplePage extends Component {
  state = { itemSelected: 11 }

  onItemSelected = id => {
    this.setState({ itemSelected: id })
  }

  render() {
    const { itemSelected } = this.state
    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={itemSelected} />}
      />
    )
  }
}

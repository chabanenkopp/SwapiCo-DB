import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import MessengerCustomerChat from "react-messenger-customer-chat"

import { SwapiServiceProvider } from "../swapi-service-context.js"
import Header from "../header"
import RandomPlanet from "../random-planet"
import SwitchRandomPlanet from "../switch-random-planet"
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages"
import SwapiService from "../../services/swapi-service"
import { StarshipDetails } from "../sw-components"
import "./app.scss"

export default class App extends Component {
  swapiService = new SwapiService()

  state = { isPlanetDisplayed: true }

  onSwitchPlanet = () => {
    const { isPlanetDisplayed } = this.state
    this.setState({ isPlanetDisplayed: !isPlanetDisplayed })
  }

  render() {
    const { isPlanetDisplayed } = this.state

    return (
      <div className="app-container">
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <Header />
            {isPlanetDisplayed && <RandomPlanet />}
            <div className="wrapper-sw-btn">
              <SwitchRandomPlanet switchPlanet={this.onSwitchPlanet} />
            </div>
            <Route path="/" render={() => <h1>Welcome to StarDB</h1>} exact />
            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/starships" component={StarshipsPage} exact />
            <Route
              path="/starships/:id"
              render={({ match }) => {
                const { id } = match.params
                return <StarshipDetails itemId={id} />
              }}
            />
            <div className="messenger-test">
              <MessengerCustomerChat
                pageId="2608301482574466"
                appId="322452035076942"
              />
            </div>
          </Router>
        </SwapiServiceProvider>
      </div>
    )
  }
}

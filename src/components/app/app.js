import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MessengerCustomerChat from "react-messenger-customer-chat"

import { SwapiServiceProvider } from "../swapi-service-context.js"
import Header from "../header"
import RandomPlanet from "../random-planet"
import SwitchRandomPlanet from "../switch-random-planet"
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage
} from "../pages"
import SwapiService from "../../services/swapi-service"
import { StarshipDetails } from "../sw-components"
import "./app.scss"

export default class App extends Component {
  swapiService = new SwapiService()

  state = { isPlanetDisplayed: true, isLogged: false }

  onSwitchPlanet = () => {
    const { isPlanetDisplayed } = this.state
    this.setState({ isPlanetDisplayed: !isPlanetDisplayed })
  }

  onLogin = () => {
    this.setState({ isLogged: true })
  }

  render() {
    const { isPlanetDisplayed, isLogged } = this.state

    return (
      <div className="app-container">
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <Header />
            {isPlanetDisplayed && <RandomPlanet />}
            <div className="wrapper-sw-btn">
              <SwitchRandomPlanet switchPlanet={this.onSwitchPlanet} />
            </div>
            <Switch>
              <Route path="/" render={() => <h1>Welcome to StarDB</h1>} exact />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} exact />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params
                  return <StarshipDetails itemId={id} />
                }}
              />
              <Route
                path="/login"
                render={() => (
                  <LoginPage isLogged={isLogged} onLogin={this.onLogin} />
                )}
              />
              <Route
                path="/secret"
                render={() => <SecretPage isLogged={isLogged} />}
              />
              {/* <Redirect to="/" /> */}
              <Route render={() => <h2>Page not found</h2>} />
            </Switch>

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

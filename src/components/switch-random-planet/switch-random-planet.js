import React from "react"

import "./switch-random-planet.scss"

const SwitchRandomPlanet = ({ switchPlanet }) => (
  <button className="btn btn-warning" onClick={() => switchPlanet()}>
    <span>Switch Planet</span>
  </button>
)

export default SwitchRandomPlanet

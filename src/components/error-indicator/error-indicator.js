import React from "react"
import "./error-indicator.scss"
import icon from "./death-star.png"

const ErrorIndicator = () => (
  <div className="error-indicator">
    <img src={icon} alt="error-icon" />
    <span className="boom">Booom</span>
    <span>something has gone terrible wrong</span>
    <span>(but we alredy sent droids to fix it)</span>
  </div>
)

export default ErrorIndicator

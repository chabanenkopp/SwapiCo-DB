import React from "react"
import Spinner from "../spinner"

import "./item-details.scss"

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export { Record }

const ItemDetails = ({ item, image, loading, name, children }) => {
  return (
    <div className="person-details card">
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <img className="person-image" src={image} alt="character" />
          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(children, child =>
                React.cloneElement(child, { item })
              )}
            </ul>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default ItemDetails

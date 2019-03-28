import React from "react"
import "./item-list.scss"
import PropTypes from "prop-types"

const ItemList = props => {
  const { data, onItemSelected, children: getLabel } = props
  const items = data.map(item => {
    const { id } = item
    const label = getLabel(item)
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(item.id)}
      >
        {label}
      </li>
    )
  })

  return <ul className="item-list list-group">{items}</ul>
}

ItemList.defaultProps = {
  onItemSelected: () => {}
}
ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}

export default ItemList

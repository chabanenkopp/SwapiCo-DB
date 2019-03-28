import React from "react"
const withChildren = func => Wrapped => props => {
  return <Wrapped {...props}>{func}</Wrapped>
}
export default withChildren

import React, { Component } from "react"

const withDataDetails = children => List =>
  class extends Component {
    state = { item: null, loading: false, image: null }

    componentDidMount() {
      this.updatePerson()
    }

    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.setState({ loading: true })
        this.updatePerson()
      }
    }

    updatePerson = () => {
      const { itemId } = this.props
      if (!itemId) return
      this.props.getData(itemId).then(item => {
        this.setState({
          item,
          loading: false,
          image: this.props.getImageUrl(item)
        })
      })
    }

    render() {
      if (!this.state.item) return <span>Select an item from a list</span>
      const { item, image, loading } = this.state
      const { name } = item
      return (
        <List
          children={children}
          item={item}
          name={name}
          image={image}
          loading={loading}
        />
      )
    }
  }

export default withDataDetails

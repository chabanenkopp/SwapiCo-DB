import React, { Component } from "react"
import Spinner from "../spinner"

const withDataLists = List =>
  class extends Component {
    state = {
      data: null
    }

    componentDidMount() {
      this.props.getData().then(data => this.setState({ data }))
    }

    render() {
      const { data } = this.state
      if (!data) return <Spinner />
      return <List {...this.props} data={data} />
    }
  }

export default withDataLists

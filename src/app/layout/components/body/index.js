import React from 'react'
import Tab from 'components/weui/tab'

export default class extends React.Component {
  render() {
    return <Tab.Body>
      {this.props.children}
    </Tab.Body>
  }
}

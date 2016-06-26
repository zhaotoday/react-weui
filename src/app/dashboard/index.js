import React from 'react'

module.exports = class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return <div className="container">
      ...
    </div>
  }
}

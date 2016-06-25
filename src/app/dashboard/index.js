import React from 'react'
//import WeUI from 'react-weui'
import {Button} from 'react-weui/lib/components/button'
//const {Button, Form, FormCell, CellBody, CellFooter, Switch} = WeUI

module.exports = class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return <div className="container">
      <Button type="primary" onClick={this._handleClick}>确认</Button>
      dashboard</div>
  }

  _handleClick = () => {
    this.context.router.push('article')
  }
}

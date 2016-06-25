import React from 'react'
import Button from 'components/weui/button'
import Cells from 'components/weui/cells'
import Cell from 'components/weui/cell'
import Form from 'components/weui/form/form'
import Input from 'components/weui/form/input'
import Label from 'components/weui/label'
const bang = require('./theme/images/bang.png')

module.exports = class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return <div className="container">
      ...
    </div>
  }

  _handleClick = () => {
    this.context.router.push('article')
  }
}

import React from 'react'
import Button from 'components/weui/button'
import Cells from 'components/weui/cells'
import Cell from 'components/weui/cell'
import Form from 'components/weui/form/form'
import Input from 'components/weui/form/input'

module.exports = class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return <div className="container">
      <Cells.Title>带说明的列表项</Cells.Title>
      <Cells>
        <Cell>
          <Cell.Body>
            标题文字
          </Cell.Body>
          <Cell.Footer>
            <Input type="tel" placeholder="请输入号码" />
          </Cell.Footer>
        </Cell>
      </Cells>
      <Button type="primary" onClick={this._handleClick}>Yes</Button>
      dashboard</div>
  }

  _handleClick = () => {
    this.context.router.push('article')
  }
}

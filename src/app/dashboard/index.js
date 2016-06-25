import React from 'react'
import Button from 'components/weui/button'
import Cells from 'components/weui/cells'
import Cell from 'components/weui/cell'
import Form from 'components/weui/form/form'
import Input from 'components/weui/form/input'
import Label from 'components/weui/label'

module.exports = class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return <div className="container">
      <Form>
        <Form.Cell>
          <Cell.Header>
            <Label>qq</Label>
          </Cell.Header>
          <Cell.Body>
            <Input type="tel" placeholder="请输入qq号"/>
          </Cell.Body>
        </Form.Cell>
        <Form.Cell>
          <Cell.Header>
            <Label>qq</Label>
          </Cell.Header>
          <Cell.Body>
            <Input type="tel" placeholder="请输入qq号"/>
          </Cell.Body>
        </Form.Cell>
      </Form>
      <Button.Area>
        <Button>确定</Button>
        <Button type="default">取消</Button>
      </Button.Area>
    </div>
  }

  _handleClick = () => {
    this.context.router.push('article')
  }
}

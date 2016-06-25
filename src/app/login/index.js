import React from 'react'
import Button from 'components/weui/button'
import Cells from 'components/weui/cells'
import Cell from 'components/weui/cell'
import Form from 'components/weui/form/form'
import Input from 'components/weui/form/input'
import Label from 'components/weui/label'
import Icon from 'components/weui/icon'
import '../../themes/default/styles/iconfont.css'
const bang = require('./theme/images/bang.png')



module.exports = class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return <div className="container">
      <i className="iconfont icon-user" />
      <Form>
        <Form.Cell>
          <Cell.Header>
            <Label>手机号</Label>
          </Cell.Header>
          <Cell.Body>
            <Input type="tel" placeholder="请输入手机号" />
          </Cell.Body>
        </Form.Cell>
        <Form.Cell>
          <Cell.Header>
            <Label>密码</Label>
          </Cell.Header>
          <Cell.Body>
            <Input type="tel" placeholder="请输入密码" />
          </Cell.Body>
        </Form.Cell>
      </Form>
      <Button.Area>
        <Button type="primary" onClick={this._handleClick}>注册</Button>
        <Button size="small" type="default">我要登陆</Button>
        <Button size="small" type="default" style={ { float: 'right' } }>忘记密码</Button>
      </Button.Area>
    </div>
  }

  _handleClick = () => {
    this.context.router.push('register')
  }
}

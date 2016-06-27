import React from 'react'
import Tab from 'components/weui/tab'
import TabBar from 'components/weui/tabBar'
import Icon from 'components/weui/icon'

module.exports = class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {
    tab: 0
  }

  render() {
    return <Tab>
      <Tab.Body>a</Tab.Body>
      <TabBar>
        <TabBar.Item
          active={this.state.tab == 0}
          onClick={e=>this.setState({tab:0})}
          icon={<Icon value="success" />}
          label="微信"
        />
        <TabBar.Item active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>
          <TabBar.Icon>
            <Icon value="success" />
          </TabBar.Icon>
          <TabBar.Label>通讯录</TabBar.Label>
        </TabBar.Item>
        <TabBar.Item
          active={this.state.tab == 2}
          onClick={e=>this.setState({tab:2})}
          icon={<Icon value="success" />}
          label="发现"
        />
        <TabBar.Item
          active={this.state.tab == 3}
          onClick={e=>this.setState({tab:3})}
          icon={<Icon value="success" />}
          label="我"
        />
      </TabBar>
    </Tab>
  }
}

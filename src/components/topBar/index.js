import React from 'react'
import Left from './component/left'
import Right from './component/right'
import Title from './component/title'
import styles from './theme/css'
import classNames from 'classnames'

class TopBar extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    transparent: React.PropTypes.bool
  }

  static defaultProps = {
    title: ''
  }

  render() {
    const { transparent } = this.props
    return <div className={classNames(styles['top-bar'], transparent ? styles['transparent'] : '')}>
      {this.props.children}
    </div>
  }
}

TopBar.Left = Left
TopBar.Right = Right
TopBar.Title = Title

export default TopBar

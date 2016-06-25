import React from 'react'
import styles from './theme/css'

export default class extends React.Component {
  render() {
    return <div className={styles.left}>
      {this.props.children}
    </div>
  }
}

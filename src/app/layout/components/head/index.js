import React from 'react'
import styles from './theme/styles'

export default class extends React.Component {
  render() {
    return <div className={styles.head}>
      <div className={styles.inner}>
        网站管理后台
      </div>
    </div>
  }
}

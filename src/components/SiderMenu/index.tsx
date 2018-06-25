// import 'rc-drawer-menu/assets/index.css'
import * as React from 'react'
import { Layout } from 'antd'
import { Link } from 'dva/router'
// import DrawerMenu from 'rc-drawer-menu'
import SiderMenu from './SiderMenu'
import styles from './index.less'

const { Sider } = Layout

export default (props: any) => {
  return (
    <Sider
      trigger={null}
      collapsible={true}
      collapsed={props.collapsed}
      breakpoint="lg"
      // onCollapse={props.onCollapse}
      width={200}
      className={styles.sider}
    >
      <div className={styles.logo} key="logo">
        <Link to="/">
          {/* <img src={props.logo} alt="logo" /> */}
          <h1>爱唱歌</h1>
        </Link>
      </div>
      <SiderMenu {...props} />
    </Sider>
  )
}
// (<SiderMenu {...props} />)

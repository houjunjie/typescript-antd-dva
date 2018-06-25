import * as React from 'react'
import * as classnames from 'classnames'
// import PropTypes from 'prop-types'
import { Menu, Icon, Popover, Layout } from 'antd'
// import './Header.less'
import styles from './Header.less'
import { getLocalStorage } from '../../utils/utils'
// import Menus from './Menu'
import SiderMenu from '../SiderMenu/SiderMenu'

const { SubMenu } = Menu

const Header = ({
  user, logout, switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover, navOpenKeys, changeOpenKeys, menu,
}: any) => {
  const handleClickMenu = (e: any) => e.key === 'logout' && logout()
  const SystemAdmin = getLocalStorage('SystemAdmin')
  const name = SystemAdmin? SystemAdmin.name: ''
  // const menusProps = {
  //   menu,
  //   siderFold: false,
  //   darkTheme: false,
  //   isNavbar,
  //   handleClickNavMenu: switchMenuPopover,
  //   location,
  //   navOpenKeys,
  //   changeOpenKeys,
  // }
  return (
    <Layout.Header className={styles.header}>
      {isNavbar
      ? <Popover placement="bottomLeft" onVisibleChange={switchMenuPopover} visible={menuPopoverVisible} overlayClassName={styles.popovermenu} trigger="click" content={<SiderMenu menuData={menu} location={location} darkTheme={true} />}>
        <div className={styles.button}>
          <Icon type="bars" />
        </div>
      </Popover>
        : <div
        className={styles.button}
          onClick={switchSider}
        >
          <Icon type={classnames({ 'menu-unfold': siderFold, 'menu-fold': !siderFold })} />
        </div>}
      <div className={styles.rightWarpper}>
        <div className={styles.button}>
          <Icon type="mail" />
        </div>
        <Menu mode="horizontal" onClick={handleClickMenu}>
          <SubMenu
            style={{
              float: 'right',
            }}
            title={<span>
              <Icon type="user" />
              {name}
            </span>}
          >
            <Menu.Item key="logout">
              退出
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Layout.Header>
  )
}

// Header.propTypes = {
//   menu: PropTypes.array,
//   user: PropTypes.object,
//   logout: PropTypes.func,
//   switchSider: PropTypes.func,
//   siderFold: PropTypes.bool,
//   isNavbar: PropTypes.bool,
//   menuPopoverVisible: PropTypes.bool,
//   location: PropTypes.object,
//   switchMenuPopover: PropTypes.func,
//   navOpenKeys: PropTypes.array,
//   changeOpenKeys: PropTypes.func,
// }

export default Header

import * as React from 'react'
import * as pathToRegexp from 'path-to-regexp'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'
import styles from './index.less'
import { urlToList } from '../_utils/pathTools'

// const { Sider } = Layout
const { SubMenu } = Menu

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'http://demo.com/icon.png',
//   icon: <Icon type="setting" />,
const getIcon = (icon: string) => {
  if (typeof icon === 'string' && icon.indexOf('http') === 0) {
    return <img src={icon} alt="icon" className={`${styles.icon} sider-menu-item-img`} />
  }
  if (typeof icon === 'string') {
    return <Icon type={icon} />
  }
  return icon
}

export const getMeunMatcheys = (flatMenuKeys: any[], path: string) => {
  return flatMenuKeys.filter((item) => {
    return pathToRegexp(item).test(path)
  })
}

interface Istate {
  openKeys: any
}
interface Iprops {
  location: any,
  darkTheme: any,
  menuData: any
}

export default class SiderMenu extends React.PureComponent<Iprops, Istate> {
  public flatMenuKeys: any
  public menus: any
  constructor (props: any) {
    super(props)
    this.menus = props.menuData
    this.flatMenuKeys = this.getFlatMenuKeys(props.menuData)
    this.state = {
      openKeys: this.getDefaultCollapsedSubMenus(props),
    }
  }
  
  public componentWillReceiveProps (nextProps: any) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        openKeys: this.getDefaultCollapsedSubMenus(nextProps),
      })
    }
  }
  /**
   * Convert pathname to openKeys
   * /list/search/articles = > ['list','/list/search']
   * @param  props
   */
  public getDefaultCollapsedSubMenus (props: any) {
    const { location: { pathname } } = props || this.props
    return urlToList(pathname)
      .map((item) => {
        return getMeunMatcheys(this.flatMenuKeys, item)[0]
      })
      .filter(item => item)
  }
  /**
   * Recursively flatten the data
   * [{path:string},{path:string}] => {path,path2}
   * @param  menus
   */
  public getFlatMenuKeys (menus: any) {
    let keys: any[] = []
    menus.forEach((item: any) => {
      if (item.children) {
        keys = keys.concat(this.getFlatMenuKeys(item.children))
      }
      keys.push(item.path)
    })
    return keys
  }
  /**
   * 判断是否是http链接.返回 Link 或 a
   * Judge whether it is http link.return a or Link
   * @memberof SiderMenu
   */
  public getMenuItemPath = (item: any) => {
    const itemPath = this.conversionPath(item.path)
    const icon = getIcon(item.icon)
    const { target, name } = item
    // Is it a http link
    if (/^https?:\/\//.test(itemPath)) {
      return (
        <a href={itemPath} target={target}>
          {icon}
          <span>{name}</span>
        </a>
      )
    }
    return (
      <Link
        to={itemPath}
        target={target}
        replace={itemPath === this.props.location.pathname}
        // onClick={
        //   this.props.isMobile
        //     ? () => {
        //         this.props.onCollapse(true)
        //       }
        //     : undefined
        // }
      >
        {icon}
        <span>{name}</span>
      </Link>
    )
  };
  /**
   * get SubMenu or Item
   */
  public getSubMenuOrItem = (item: any) => {
    if (item.children && item.children.some((child: any) => child.name)) {
      const childrenItems = this.getNavMenuItems(item.children)
      // 当无子菜单时就不展示菜单
      if (childrenItems && childrenItems.length > 0) {
        return (
          <SubMenu
            title={
              item.icon ? (
                <span>
                  {getIcon(item.icon)}
                  <span>{item.name}</span>
                </span>
              ) : (
                item.name
              )
            }
            key={item.path}
          >
            {childrenItems}
          </SubMenu>
        )
      }
      return null
    }
    return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>
  };
  /**
   * 获得菜单子节点
   * @memberof SiderMenu
   */
  public getNavMenuItems = (menusData: any) => {
    if (!menusData) {
      return []
    }
    return menusData
      .filter((item: any) => item.name && !item.hideInMenu)
      .map((item: any) => {
        // make dom
        const ItemDom = this.getSubMenuOrItem(item)
        return ItemDom
      })
      .filter((item: any) => item)
  };
  // Get the currently selected menu
  public getSelectedMenuKeys = () => {
    const { location: { pathname } } = this.props
    return urlToList(pathname).map(itemPath => getMeunMatcheys(this.flatMenuKeys, itemPath).pop())
  };
  // conversion Path
  // 转化路径
  public conversionPath = (path: string) => {
    if (path && path.indexOf('http') === 0) {
      return path
    }
    return `/${path || ''}`.replace(/\/+/g, '/')
  };
  // permission to check
  // checkPermissionItem = (authority, ItemDom) => {
  //   if (this.props.Authorized && this.props.Authorized.check) {
  //     const { check } = this.props.Authorized
  //     return check(authority, ItemDom)
  //   }
  //   return ItemDom
  // };
  public isMainMenu = (key: string) => {
    return this.menus.some((item: any) => key && (item.key === key || item.path === key))
  };
  public handleOpenChange = (openKeys: any) => {
    const lastOpenKey = openKeys[openKeys.length - 1]
    const moreThanOne = openKeys.filter((openKey: any) => this.isMainMenu(openKey)).length > 1
    this.setState({
      openKeys: moreThanOne ? [lastOpenKey] : [...openKeys],
    })
  };
  public render () {
    // const {
    //   darkTheme,
    // } = this.props
    const { openKeys } = this.state
    // Don't show popup menu when it is been collapsed
    // const menuProps = collapsed
    //   ? {}
    //   : {
    //     openKeys,
    //   }
    // if pathname can't match, use the nearest parent's key
    let selectedKeys = this.getSelectedMenuKeys()
    if (!selectedKeys.length) {
      selectedKeys = [openKeys[openKeys.length - 1]]
    }
    return (
      <Menu
        key="Menu"
        theme={this.props.darkTheme ? 'light' : 'dark'}
        mode="inline"
        // {...menuPropsProps}
        onOpenChange={this.handleOpenChange}
        selectedKeys={selectedKeys}
        style={{ padding: '16px 0', width: '100%' }}
      >
        {this.getNavMenuItems(this.menus)}
      </Menu>
    )
  }
}

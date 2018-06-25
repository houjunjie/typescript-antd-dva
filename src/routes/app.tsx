
import * as React from 'react';
import * as NProgress from 'nprogress'
import { Layout } from 'antd'
import { Loader, MyLayout, SiderMenu } from 'components'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import { getMenuData } from '../common/menu'
import config from '../utils/config'
import '../themes/index.less'
import './app.less'
// let lastHref: any;
// const NProgress = require('nprogress').default
const { Content, Footer } = Layout
const { Header } = MyLayout
const { openPages } = config

let lastHref: any;

export interface Istate {
  count: number,
}

export interface Iprops {
  app: any,
  loading: any,
  location: any,
  dispatch: any,
  children: any
}

class App extends React.PureComponent<Iprops, Istate> {
  public state: {
    count: 0
  }
  public render() {
    const {
      app, location, loading, dispatch, children
    } = this.props
    const {
      user, siderFold, isNavbar, menuPopoverVisible, navOpenKeys,
    } = app;
    let { pathname } = location;
    pathname = pathname.startsWith('/') ? pathname : `/${pathname}`

    const { logo } = config;

    const { href } = window.location

    if (lastHref !== href) {
      NProgress.start()
      if (!loading.global) {
        NProgress.done()
        lastHref = href
      }
    }
    /**
     * 根据菜单取得重定向地址.
     */
    const redirectData: any[] = []
    const getRedirect = (item: any) => {
      if (item && item.children) {
        if (item.children[0] && item.children[0].path) {
          redirectData.push({
            from: `${item.path}`,
            to: `${item.children[0].path}`,
          })
          item.children.forEach((child: any) => {
            getRedirect(child)
          })
        }
      }
    }
    getMenuData().forEach(getRedirect)


    const headerProps = {
      menu: getMenuData(),
      user,
      location,
      siderFold,
      isNavbar,
      menuPopoverVisible,
      navOpenKeys,
      switchMenuPopover () {
        dispatch({ type: 'app/switchMenuPopver' })
      },
      logout () {
        dispatch({ type: 'app/logout' })
      },
      switchSider () {
        dispatch({ type: 'app/switchSider' })
      },
      changeOpenKeys (openKeys: string) {
        dispatch({ type: 'app/handleNavOpenKeys', payload: { navOpenKeys: openKeys } })
      },
    }

    if (openPages && openPages.indexOf(pathname) !== -1) {
      return (
        <div>
          <Loader fullScreen={true} spinning={loading.effects['app/query']} />
          {children}
        </div>
      )
    }
    return (
      <div>
          <Loader fullScreen={true} spinning={loading.effects['app/query']} />
          <Layout >
          {/* {!isNavbar && <Sider
            trigger={null}
            collapsible
            collapsed={siderFold}
          >
            {siderProps.menu.length === 0 ? null : <MyLayout.Sider {...siderProps} />}
          </Sider>} */}
          {!isNavbar && <SiderMenu
            logo={logo}
            // If you do not have the Authorized parameter
            // you will be forced to jump to the 403 interface without permission
            menuData={getMenuData()}
            collapsed={siderFold}
            location={location}
            isMobile={false}
            // onCollapse={() => {}}
          />}
          <Layout style={{ height: '100vh', overflow: 'scroll' }} id="mainContainer">
            {/* <BackTop target={() => document.getElementById('mainContainer')} /> */}
            <Header {...headerProps} />
            <Content>
              {/* <Bread {...breadProps} /> */}
              {/* {hasPermission ? children : <Error />} */}
              {children}
            </Content>
            <Footer >
              {config.footerText}
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

// App.propTypes = {
//   children: PropTypes.element.isRequired,
//   location: PropTypes.object,
//   dispatch: PropTypes.func,
//   app: PropTypes.object,
//   loading: PropTypes.object,
// }

export default withRouter(connect(({ app, loading }: Iprops) => ({ app, loading }))(App))

import * as React from 'react'
// import PropTypes from 'prop-types'
import * as pathToRegexp from 'path-to-regexp'
import { Breadcrumb, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { queryArray } from '../../utils/utils'
import styles from './Layout.less'

const Bread = ({ menu, location }: any) => {
  // 匹配当前路由
  const pathArray: any[] = []
  let current
  for (const index in menu) {
    if (menu[index].route && pathToRegexp(menu[index].route).exec(location.pathname)) {
      current = menu[index]
      break
    }
  }

  const getPathArray = (item: any) => {
    pathArray.unshift(item)
    if (item.bpid) {
      getPathArray(queryArray(menu, item.bpid, 'id'))
    }
  }

  const paramMap = {}
  if (!current) {
    pathArray.push(menu[0] || {
      id: 1,
      icon: 'laptop',
      name: 'Dashboard',
    })
    pathArray.push({
      id: 404,
      name: 'Not Found',
    })
  } else {
    getPathArray(current)

    const keys: any[] = []
    const values = pathToRegexp(current.route, keys).exec(location.pathname.replace('#', '')) || []
    if (keys.length) {
      keys.forEach((currentValue, index) => {
        if (typeof currentValue.name !== 'string') {
          return
        }
        paramMap[currentValue.name] = values[index + 1]
      })
    }
  }

  // 递归查找父级
  const breads = pathArray.map((item, key) => {
    const content = (
      <span>{item.icon
        ? <Icon type={item.icon} style={{ marginRight: 4 }} />
        : ''}{item.name}</span>
    )
    return (
      <Breadcrumb.Item key={key}>
        {((pathArray.length - 1) !== key)
          ? <Link to={pathToRegexp.compile(item.route || '')(paramMap) || '#'}>
            {content}
          </Link>
          : content}
      </Breadcrumb.Item>
    )
  })

  return (
    <div className={styles.bread}>
      <Breadcrumb>
        {breads}
      </Breadcrumb>
    </div>
  )
}

// Bread.propTypes = {
//   menu: PropTypes.array,
//   location: PropTypes.object,
// }

export default Bread

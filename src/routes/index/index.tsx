import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'dva'
// import { routerRedux } from 'dva/router'
import { Row } from 'antd'
interface Iprops {
  ycyh: any,
  dispatch: any,
}
const Index = ({ ...props }: Iprops) => {
  console.log(props)
  return (
    <Row type="flex" gutter={32} style={{ textAlign: 'center' }}>
      Index
    </Row>
  )
}
export default connect(({
  ycyh, dispatch,
}: Iprops) => ({
  ycyh, dispatch,
}))(Index)

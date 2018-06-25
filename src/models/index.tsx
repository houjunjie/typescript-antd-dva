import modelExtend from 'dva-model-extend'
// import queryString from 'query-string'
import { query } from 'services/index'
import { pageModel } from './common'


export default modelExtend(pageModel, {
  namespace: 'index',
  state: {
  },

  subscriptions: {
    setup ({ dispatch, history }: any) {
      history.listen((location: any) => {
        if (location.pathname === '/index') {
          // const payload = queryString.parse(location.search) || { page: 1, pageSize: 10 }
          dispatch({
            type: 'query',
            payload: {},
          })
        }
      })
    },
  },

  effects: {

    * query ({ payload = {} }: any, { call, put }: any) {
      const data = yield call(query, payload)
      console.log(data)
    },
  },

  reducers: {

  },
})

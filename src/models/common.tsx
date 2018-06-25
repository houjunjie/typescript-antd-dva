import modelExtend from 'dva-model-extend'

export const model = {
  reducers: {
    updateState (state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

export const pageModel = modelExtend(model, {

  state: {
    list: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: (total: string) => `共 ${total} 条数据`,
      current: 1,
      total: 0,
      pageSize: 10,
    },
    searchValue: '',
  },

  reducers: {
    querySuccess (state: any, { payload }: any) {
      const { list, pagination } = payload
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
      }
    },
  },

})


// export default {
//   model,
//   pageModel,
// }

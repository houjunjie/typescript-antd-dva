const APIV1 = '/v4.0'
const APIV2 = '/api/v2'

export default {
  name: 'admin',
  prefix: 'antdAdmin',
  footerText: 'admin',
  logo: '/logo.svg',
  CORS: [],
  openPages: ['/login', '/platform'],
  apiPrefix: APIV1,
  APIV1,
  APIV2,
  api: {
    index: 'index'
  },
}

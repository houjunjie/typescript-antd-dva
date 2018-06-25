import * as React from 'react'

import { Switch, Route, Redirect, routerRedux } from 'dva/router'

import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
const dynamic = require('dva/dynamic').default;
const { ConnectedRouter } = routerRedux
import App from './routes/app'
interface IroutersProps{
  history: any;
  app: object;
}

const Routers = function ({ history, app }: IroutersProps) {
  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  })
  const routes: any[] = [
    {
      path: '/banner/indexbanner',
      models: () => [import('./models/index')],
      component: () => import('./routes/index/index'),
    },
  ]
  const redirect = () => <Redirect to="/banner/indexbanner" />
  return (
    <ConnectedRouter history={history}>
      <LocaleProvider locale={zhCN}>
        <App>
          <Switch>
            <Route exact={true} path="/" render={redirect} />
            {
              routes.map(({ path, ...dynamics }, key) => (
                <Route 
                  key={key}
                  exact={true}
                  path={path}
                  component={dynamic({
                    app,
                    ...dynamics,
                  })}
                />
              ))
            }
            <Route component={error} />
          </Switch>
        </App>
      </LocaleProvider>
    </ConnectedRouter>
  )
}

// Routers.propTypes = {
//   history: PropTypes.object,
//   app: PropTypes.object,
// }

export default Routers

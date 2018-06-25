// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter,Route } from 'react-router-dom';

// import loginReducer from './reducers/loginReducer';
// import { createStore } from 'redux';
// import { Provider} from 'react-redux';

// import App from './App';
// import './index.css';

// const store = createStore(loginReducer);
// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <Route path="/" component={App}/>
//     </BrowserRouter>
//   </Provider>
//   ,
//   document.getElementById('root') as HTMLElement
// );
import { message } from 'antd'
import dva from 'dva'
// import createLoading from 'dva-loading'
const createLoading = require('dva-loading').default;

const app = dva({
  ...createLoading({
    effects: true,
  }),
  // history: browserHistory,
  onError (error: any) {
    message.error(error.message)
  },
})

// 2. Model
app.model(require('./models/app').default)

// 3. Router
app.router(require('./router').default)

// 4. Start
app.start('#root')


// if (module['hot']) {
//   module['hot'].accept(); 
// }
registerServiceWorker();

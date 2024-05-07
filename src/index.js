// index.js 是项目的入口，整个项目从这里开始运行
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './day_03/store';
import { Provider } from 'react-redux';

// App 是项目的根组件
import App from './day_03/App';

// 渲染根组件到#root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
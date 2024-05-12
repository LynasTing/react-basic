// index.js 是项目的入口，整个项目从这里开始运行
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/style/index.scss'
import router from '@/day_06/router'
import { RouterProvider } from 'react-router-dom';
import '@/style/index.scss'
import '@/day_06/style/index.scss'
import { Provider } from 'react-redux';
import store from '@/day_06/store'


// 渲染根组件到#root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
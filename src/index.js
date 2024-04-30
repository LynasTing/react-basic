// index.js 是项目的入口，整个项目从这里开始运行

import React from 'react';
import ReactDOM from 'react-dom/client';

// App 是项目的根组件
import App from './day_01/App';

// 渲染根组件到#root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
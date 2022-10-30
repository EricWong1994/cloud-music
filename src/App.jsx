import React from 'react';
import { renderRoutes } from 'react-router-config'; //renderRoutes 读取路由配置转化为 Route 标签、
import { HashRouter } from 'react-router-dom';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import routes from './routes/index.js';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<HashRouter>
				<GlobalStyle></GlobalStyle>
				<IconStyle></IconStyle>
				{/* <i className="iconfont">&#xe62b;</i> */}
				{renderRoutes(routes)}
			</HashRouter>
		</Provider>
	);
}

export default App;

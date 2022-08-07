import { Sidebar } from './components/Sidebar';
import { TopMenu } from './components/TopMenu';

import style from './App.module.scss';

function App() {
	return (
		<div className="App">
			<Sidebar />
			<TopMenu />
			<div className={style.content}></div>
		</div>
	);
}

export default App;

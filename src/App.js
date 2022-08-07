import { Sidebar } from './components/Sidebar';
import { TopMenu } from './components/TopMenu';

import style from './App.module.scss';
import { Costs } from './pages/Costs';

function App() {
	return (
		<div className="App">
			<Sidebar />
			<TopMenu />
			<div className={style.content}>
				<Costs />
			</div>
		</div>
	);
}

export default App;

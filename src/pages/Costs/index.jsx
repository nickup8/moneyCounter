import React from 'react';
import { EnterData } from '../../components/EnterData';
import { List } from '../../components/List';

import style from './costs.module.scss';

export const Costs = () => {
	return (
		<div className={style.container}>
			<div className={style.enterDate}>
				<EnterData />
			</div>
			<div className={style.countMonth}>Всего расходов за месяц</div>
			<div className={style.countPrise}>Всего на счетах</div>
			<div className={style.costList}>
				<List />
			</div>
		</div>
	);
};

import React from 'react';
import { Button } from './../ui/Button';

import style from './enterData.module.scss';

export const EnterData = () => {
	return (
		<div className={style.enterData}>
			<h2 className={style.h2}>Добавить пункт расходов</h2>
			<form className={style.form}>
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<input type="text" />
				<Button text="Добавить" />
			</form>
		</div>
	);
};

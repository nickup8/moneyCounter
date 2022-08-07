import React from 'react';
import { Input } from '../ui/Input';
import { Button } from './../ui/Button';

import iconRub from './../../img/rub.svg';

import style from './enterData.module.scss';

export const EnterData = () => {
	return (
		<div className={style.enterData}>
			<h2 className={style.h2}>Добавить пункт расходов</h2>
			<form className={style.form}>
				<div className={style.date}>
					<Input label="Дата" type="text" placeholder="Введите дату" />
				</div>
				<div className={style.categoty}>
					<Input
						label="Категория"
						type="text"
						placeholder="Введите категорию"
					/>
				</div>
				<div className={style.order}>
					<Input label="Счет" type="text" placeholder="Укажите счет" />
				</div>
				<div className={style.sum}>
					<Input label="Сумма" type="text" placeholder="Сумма" icon={iconRub} />
				</div>
				<div className={style.comments}>
					<input type="text" />
				</div>
				<Button text="Добавить" type="sudmit" />
			</form>
		</div>
	);
};

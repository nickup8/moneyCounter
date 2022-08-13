import React from 'react';
import { Input } from '../ui/Input';
import { Button } from './../ui/Button';
import { TextArea } from '../ui/TextArea';

import iconRub from './../../img/rub.svg';

import style from './enterData.module.scss';
import { Select } from '../ui/Select';

export const EnterData = () => {
	return (
		<div className={style.enterData}>
			<h2 className={style.h2}>Добавить пункт расходов</h2>
			<form className={style.form}>
				<div className={style.date}>
					<Input label="Дата" type="text" placeholder="Введите дату" value="" />
				</div>
				<div className={style.categoty}>
					<Select label="Категория" />
				</div>
				<div className={style.order}>
					<Select label="Счет" />
				</div>
				<div className={style.sum}>
					<Input
						label="Сумма"
						type="text"
						placeholder="Сумма"
						icon={iconRub}
						value=""
					/>
				</div>
				<div className={style.comments}>
					<TextArea />
				</div>
				<Button text="Добавить" type="sudmit" />
			</form>
		</div>
	);
};

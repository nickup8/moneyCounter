import React from 'react';
import { Input } from '../ui/Input';
import { Button } from './../ui/Button';
import { TextArea } from '../ui/TextArea';
import { Select } from '../ui/Select';
import { useSelector, useDispatch } from 'react-redux';
import {
	setDate,
	setCategory,
	setOrder,
	setSum,
	setComments,
} from '../../redux/slices/listSlise';
import { categoryArr, ordersArr } from '../../redux/slices/listSlise';

import style from './enterData.module.scss';

import iconRub from './../../img/rub.svg';

export const EnterData = () => {
	const date = useSelector((state) => state.list.date);
	const comments = useSelector((state) => state.list.comments);
	const category = useSelector((state) => state.list.category);
	const order = useSelector((state) => state.list.order);
	const sum = useSelector((state) => state.list.sum);
	const dispatch = useDispatch();

	const handleComments = (value) => {
		dispatch(setComments(value));
	};

	const handleCategory = (value) => {
		dispatch(setCategory(value));
	};
	const handleSum = (value) => {
		dispatch(setSum(value));
	};

	const handleDate = (date) => {
		dispatch(setDate(date));
	};
	const handleOrder = (value) => {
		dispatch(setOrder(value));
	};

	return (
		<div className={style.enterData}>
			<h2 className={style.h2}>Добавить пункт расходов</h2>
			<form className={style.form}>
				<div className={style.date}>
					<Input
						label="Дата"
						type="text"
						placeholder="Введите дату"
						value={date}
						onChange={handleDate}
					/>
				</div>
				<div className={style.categoty}>
					<Select
						label="Категория"
						options={categoryArr}
						onChange={handleCategory}
						value={category}
					/>
				</div>
				<div className={style.order}>
					<Select
						label="Счет"
						options={ordersArr}
						onChange={handleOrder}
						value={order}
					/>
				</div>
				<div className={style.sum}>
					<Input
						label="Сумма"
						type="text"
						placeholder="Сумма"
						icon={iconRub}
						value={sum}
						onChange={handleSum}
					/>
				</div>
				<div className={style.comments}>
					<TextArea value={comments} onChange={handleComments} />
				</div>
				<Button text="Добавить" type="button" />
			</form>
		</div>
	);
};

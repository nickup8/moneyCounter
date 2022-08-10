import React from 'react';

import style from './list.module.scss';

import rubIcon from './../../img/rub.svg';

export const List = () => {
	return (
		<div className={style.list}>
			<h2 className={style.h2}>Список расходов</h2>
			<div className={style.tabel}>
				<div className={style.thead}>
					<div className={style.tcolumnbox}>#</div>
					<div className={style.tcolumnbox}>Дата</div>
					<div className={style.tcolumnbox}>Категория</div>
					<div className={style.tcolumnbox}>Счет</div>
					<div className={style.tcolumnbox}>Сумма</div>
					<div className={style.tcolumnbox}>Комментарий</div>
				</div>
				<div className={style.tbody}>
					<div className={style.trow}>
						<div className={style.tcolumnbox}>1</div>
						<div className={style.tcolumnbox}>29 июл. 2022</div>
						<div className={style.tcolumnbox}>Благотворительность</div>
						<div className={style.tcolumnbox}>Золотая карта</div>
						<div className={style.tcolumnbox}>2000</div>
						<div className={style.tcolumnbox}>На усурийских тигров</div>
						<div className={style.tcolumnbox}>iconbox</div>
					</div>
					<div className={style.trow}>
						<div className={style.tcolumnbox}>1</div>
						<div className={style.tcolumnbox}>29 июл. 2022</div>
						<div className={style.tcolumnbox}>Благотворительность</div>
						<div className={style.tcolumnbox}>Золотая карта</div>
						<div className={style.tcolumnbox}>2000</div>
						<div className={style.tcolumnbox}>На усурийских тигров</div>
						<div className={style.tcolumnbox}>iconbox</div>
					</div>
					<div className={style.trow}>
						<div className={style.tcolumnbox}>1</div>
						<div className={style.tcolumnbox}>29 июл. 2022</div>
						<div className={style.tcolumnbox}>Благотворительность</div>
						<div className={style.tcolumnbox}>Золотая карта</div>
						<div className={style.tcolumnbox}>2000</div>
						<div className={style.tcolumnbox}>На усурийских тигров</div>
						<div className={style.tcolumnbox}>iconbox</div>
					</div>
					<div className={style.trow}>
						<div className={style.tcolumnbox}>1</div>
						<div className={style.tcolumnbox}>29 июл. 2022</div>
						<div className={style.tcolumnbox}>Благотворительность</div>
						<div className={style.tcolumnbox}>Золотая карта</div>
						<div className={style.tcolumnbox}>2000</div>
						<div className={style.tcolumnbox}>На усурийских тигров</div>
						<div className={style.tcolumnbox}>iconbox</div>
					</div>
					<div className={style.trow}>
						<div className={style.tcolumnbox}>1</div>
						<div className={style.tcolumnbox}>29 июл. 2022</div>
						<div className={style.tcolumnbox}>Благотворительность</div>
						<div className={style.tcolumnbox}>Золотая карта</div>
						<div className={style.tcolumnbox}>2000</div>
						<div className={style.tcolumnbox}>На усурийских тигров</div>
						<div className={style.tcolumnbox}>iconbox</div>
					</div>
				</div>
			</div>
		</div>
	);
};

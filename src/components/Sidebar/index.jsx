import React from 'react';
import { Link } from 'react-router-dom';

import logo from './../../img/logo.svg';
import menuButton from './../../img/menuButton.svg';

// Экспортируем иконки для меню

import consumption from './../../img/consumption.svg';
import consumptionWhite from './../../img/consumption_white.svg';
import income from './../../img/income.svg';
import incomeWhite from './../../img/income_white.svg';
import score from './../../img/score.svg';
import scoreWhite from './../../img/score_white.svg';
import category from './../../img/category.svg';
import categoryWhite from './../../img/category_white.svg';
import report from './../../img/report.svg';
import reportWhite from './../../img/report_white.svg';

import style from './Sidebar.module.scss';
import { MenuItem } from '../ui/MenuItem';

const navItems = [
	{
		pageName: 'Расходы',
		icon: consumption,
		iconActive: consumptionWhite,
		link: '/consumption',
	},
	{
		pageName: 'Доходы',
		icon: income,
		iconActive: incomeWhite,
		link: '/income',
	},
	{
		pageName: 'Счета',
		icon: score,
		iconActive: scoreWhite,
		link: '/score',
	},
	{
		pageName: 'Категории',
		icon: category,
		iconActive: categoryWhite,
		link: '/category',
	},
	{
		pageName: 'Отчеты',
		icon: report,
		iconActive: reportWhite,
		link: '/report',
	},
];

export const Sidebar = () => {
	return (
		<div className={style.sidebar}>
			<div className={style.topSidebar}>
				<Link to="/">
					<img src={logo} alt="MoneyCounter logo" />
				</Link>
				<div className={style.menuButton}>
					<img src={menuButton} alt="menu button icon" />
				</div>
			</div>
			<div className={style.navigation}>
				<h2 className={style.h2_sidebar}>Разделы:</h2>
				<div className={style.nav}>
					{navItems.map((obj, index) => {
						return (
							<MenuItem
								{...obj}
								index={index}
								key={obj.pageName + '_' + index}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

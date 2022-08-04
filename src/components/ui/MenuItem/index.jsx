import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setMenuItemId } from '../../../redux/slices/munuItemSlice';

import style from './MenuItem.module.scss';

export const MenuItem = ({ pageName, icon, iconActive, link, index }) => {
	const menuItemId = useSelector((state) => state.menuItem.menuItemId);
	const dispatch = useDispatch();

	const menuActive = `${style.menuItem} ${style.active}`;
	const menuNormal = `${style.menuItem}`;

	const onClickMenuItem = (index) => {
		dispatch(setMenuItemId(index));
	};

	return (
		<Link
			to={link}
			onClick={() => onClickMenuItem(index)}
			className={menuItemId === index ? menuActive : menuNormal}
		>
			<img src={menuItemId === index ? iconActive : icon} alt="" />{' '}
			<span>{pageName}</span>
		</Link>
	);
};

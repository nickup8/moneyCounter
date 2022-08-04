import React from 'react';

import style from './Search.module.scss';
import searchIcon from './../../img/search.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/searchSlice';
export const Search = () => {
	const searchValue = useSelector((state) => state.search.value);
	const dispatch = useDispatch();

	return (
		<div className={style.searchBox}>
			<input
				className={style.inputSearch}
				type="text"
				placeholder="Поиск по сайту"
				value={searchValue}
				onChange={(event) => dispatch(setSearchValue(event.target.value))}
			/>
			<div className={style.searchIcon}>
				<img src={searchIcon} alt="search icon" />
			</div>
		</div>
	);
};

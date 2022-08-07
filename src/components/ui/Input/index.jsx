import React from 'react';

import style from './Input.module.scss';

export const Input = ({ type, label, placeholder, icon }) => {
	return (
		<div className={style.inputBox}>
			<input
				className={icon ? style.input + ' ' + style.inputIcon : style.input}
				type={type}
				placeholder={placeholder}
			/>
			<label className={style.label}>{label}</label>
			{icon ? <img src={icon} className={style.icon} alt="icon" /> : ''}
		</div>
	);
};

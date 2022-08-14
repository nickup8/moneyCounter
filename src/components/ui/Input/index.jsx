import React from 'react';

import style from './Input.module.scss';

export const Input = ({ type, label, placeholder, icon, value, onChange }) => {
	return (
		<div className={style.inputBox}>
			<input
				className={icon ? style.input + ' ' + style.inputIcon : style.input}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={(event) => onChange(event.target.value)}
			/>
			<label className={style.label}>{label}</label>
			{icon ? <img src={icon} className={style.icon} alt="icon" /> : ''}
		</div>
	);
};

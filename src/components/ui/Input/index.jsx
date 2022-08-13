import React from 'react';

import style from './Input.module.scss';

export const Input = ({ type, label, placeholder, icon, value }) => {
	const [valueChange, setValueChenge] = React.useState(value);
	return (
		<div className={style.inputBox}>
			<input
				className={icon ? style.input + ' ' + style.inputIcon : style.input}
				type={type}
				placeholder={placeholder}
				value={valueChange}
				onChange={(event) => setValueChenge(event.target.value)}
			/>
			<label className={style.label}>{label}</label>
			{icon ? <img src={icon} className={style.icon} alt="icon" /> : ''}
		</div>
	);
};

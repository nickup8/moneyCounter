import React from 'react';
// import { useDispatch } from 'react-redux';

import style from './textArea.module.scss';

export const TextArea = ({ value, onChange }) => {
	return (
		<div className={style.textAreaBox}>
			<label className={style.label}>Комментарий</label>
			<textarea
				rows="3"
				className={style.textarea}
				value={value}
				onChange={(event) => onChange(event.target.value)}
				placeholder="Краткое описание покупки"
			></textarea>
		</div>
	);
};

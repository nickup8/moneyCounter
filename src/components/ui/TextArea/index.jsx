import React from 'react';
import style from './textArea.module.scss';

export const TextArea = () => {
	const [textValue, setTextValue] = React.useState('');

	return (
		<div className={style.textAreaBox}>
			<label className={style.label}>Комментарий</label>
			<textarea
				rows="3"
				className={style.textarea}
				value={textValue}
				onChange={(event) => setTextValue(event.target.value)}
				placeholder="Краткое описание покупки"
			></textarea>
		</div>
	);
};

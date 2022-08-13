import React from 'react';

import style from './select.module.scss';

const scores = ['Золотая карта', 'Серебренная карта', 'Наличные'];

export const Select = () => {
	const [valueSelect, setValueSelect] = React.useState(scores[0]);
	const [openSelect, setOpenSelect] = React.useState(false);

	const handleSelect = (value) => {
		setValueSelect(value);
		setOpenSelect(false);
	};

	return (
		<div className={style.selectBox}>
			<div className={style.select} onClick={() => setOpenSelect(true)}>
				{valueSelect}
			</div>
			{openSelect && (
				<div className={style.options}>
					{scores.map((obj, index) => {
						return (
							<div
								className={style.option}
								value={obj}
								onClick={() => handleSelect(obj)}
								key={obj + '_' + index}
							>
								{obj}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

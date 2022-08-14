import React from 'react';

import style from './select.module.scss';

import arrowUp from './../../../img/arrow_up.svg';
import arrowDown from './../../../img/arrow_down.svg';

export const Select = ({ label, options, onChange, value }) => {
	const [openSelect, setOpenSelect] = React.useState(false);

	const handleSelect = (value) => {
		onChange(value);
		setOpenSelect(false);
	};

	return (
		<div className={style.selectBox}>
			<label className={style.label}>{label}</label>
			<div className={style.select} onClick={() => setOpenSelect(true)}>
				{value}
				<img
					className={style.icon}
					src={openSelect ? arrowUp : arrowDown}
					alt="icon arrow"
				/>
			</div>

			{openSelect && (
				<div className={style.options}>
					{options.map((obj, index) => {
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

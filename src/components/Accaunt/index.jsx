import React from 'react';

import style from './Account.module.scss';

export const Account = () => {
	return (
		<div className={style.accountWrapper}>
			<div className={style.accountName}>Сироткин Николай</div>
			<div className={style.avatar}>СН</div>
		</div>
	);
};

import React from 'react';
import { Account } from '../Accaunt';
import { Search } from '../Search/Index';
import { Button } from '../ui/Button';

import style from './TopMenu.module.scss';

export const TopMenu = () => {
	return (
		<div className={style.topMenu}>
			<div className={style.topMenuContent}>
				<div className={style.serachBox}>
					<Search />
				</div>
				<div className={style.accountBox}>
					<div className={style.accountDate}>
						<Account />
					</div>

					<Button text="Пригласить" type="button" />
				</div>
			</div>
		</div>
	);
};

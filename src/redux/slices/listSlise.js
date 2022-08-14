import { createSlice } from '@reduxjs/toolkit';

export const categoryArr = ['Продукты', 'Коммунальные платежи', 'Ипотека'];
export const ordersArr = ['Золотая карта', 'Серебренная карта', 'Наличные'];

const initialState = {
	listCost: [],
	date: '',
	category: categoryArr[0],
	order: ordersArr[0],
	sum: '',
	comments: '',
};

export const listSlise = createSlice({
	name: 'list',
	initialState,
	reducers: {
		setDate: (state, action) => {
			state.date = action.payload;
		},
		setCategory: (state, action) => {
			state.category = action.payload;
		},
		setOrder: (state, action) => {
			state.order = action.payload;
		},
		setSum: (state, action) => {
			state.sum = action.payload;
		},
		setComments: (state, action) => {
			state.comments = action.payload;
		},
	},
});

export const { setDate, setCategory, setOrder, setSum, setComments } =
	listSlise.actions;

export default listSlise.reducer;

import { configureStore } from '@reduxjs/toolkit';
import menuItem from './slices/munuItemSlice';
import search from './slices/searchSlice';

export const store = configureStore({
	reducer: { menuItem, search },
});

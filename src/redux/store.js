import { configureStore } from '@reduxjs/toolkit';
import menuItem from './slices/munuItemSlice';
import search from './slices/searchSlice';
import list from './slices/listSlise';

export const store = configureStore({
	reducer: { menuItem, search, list },
});

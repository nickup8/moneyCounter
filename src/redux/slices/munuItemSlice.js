import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	menuItemId: 0,
};

export const menuItemSlice = createSlice({
	name: 'menuItem',
	initialState,
	reducers: {
		setMenuItemId: (state, actions) => {
			state.menuItemId = actions.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setMenuItemId } = menuItemSlice.actions;

export default menuItemSlice.reducer;

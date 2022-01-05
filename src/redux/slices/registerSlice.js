import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as userApi from '../../api/user';

const initialState = {
	loading: false,
	data: null,
	error: null,
};

export const registerUser = createAsyncThunk('registerUser', async (info, {rejectWithValue}) => {
	try {
		return await (
			await userApi.login(info)
		).data;
	} catch (err) {
		if (!err.response) throw err;
		return rejectWithValue(err?.response?.data[0]?.msg);
	}
});

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	extraReducers: {
		[registerUser.pending](state) {
			state.loading = true;
		},
		[registerUser.fulfilled](state, { payload }) {
			state.loading = false;
			state.data = payload;
		},
		[registerUser.rejected](state, { payload }) {
			state.loading = false;
			state.error = payload;
		},
	},
});

export default counterSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as userApi from '../../api/user';

const initialState = {
	loading: false,
	data: null,
	error: null,
};

export const fetchUser = createAsyncThunk('fetchUser', async (info, {rejectWithValue}) => {
	try {
		return await (await userApi.login(info)).data
	} catch (err) {
		if(!err.response) throw err;
		return rejectWithValue(err?.response?.data[0]?.msg);
	}
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: {
		[fetchUser.pending](state) {
			state.loading = true;
		},
		[fetchUser.fulfilled](state, { payload }) {
			state.loading = false;
			state.data = payload;
		},
		[fetchUser.rejected](state, { payload }) {
			console.log(payload)
			state.loading = false;
			state.error = payload;
		},
	},
});

export default userSlice.reducer;

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState = {
    users: [],
    selectedUser: null,
    userById: null,
    error: null,
    loading: null
}
const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await userService.getById(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }
    },
    extraReducers: (value) => value
        .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            }
        )
        .addCase(getAll.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getAll.rejected, (state, action) => {
            state.loading = false
            state.errors = action.payload
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.userById = action.payload
        })

});


const {reducer: userReducer, actions: {setSelectedUser}} = userSlice;

const userActions = {
    getAll,
    getById,
    setSelectedUser
}

export {
    userReducer,
    userSlice,
    userActions
}
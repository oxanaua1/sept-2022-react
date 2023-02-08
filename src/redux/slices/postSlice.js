import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../services";


const initialState = {
    posts: [],
    selectedPost: null,
    postById: null,
    error: null,
    loading: null,


};
const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await postService.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)

        }
    }
)


const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await postService.getById(id)
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)

        }
    }
)


const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        }
    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [getAll.pending]: (state) => {
            state.loading = true;
        },
        [getAll.rejected]: (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        },
        [getById.fulfilled]: (state, action) => {
            state.postById = action.payload;
        }

    }

});
const {reducer: postReducer, actions: {setSelectedPost}} = postSlice;

const postActions = {
    getAll,
    getById,
    setSelectedPost

}

export {
    postSlice,
    postReducer,
    postActions
}
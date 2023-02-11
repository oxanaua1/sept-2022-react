import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";


const initialState = {
    cars: [],
    prevPage: null,
    nextPage: null,
    carForUpdate: null,
    errors: null,
    loading: null

};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await carService.getAll(page);
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car);
            thunkAPI.dispatch(getAll({page: 1}))       //знову перезавантажити всі кари та відрендерити на сторінці

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id)
            thunkAPI.dispatch(getAll({page: 1}))
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateById(id, car);
            thunkAPI.dispatch(getAll({page: 1}))
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {                //reducers використовується для написання не асинхронних дій над стейтом
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            const {prev, next, items} = action.payload //prev, next, items - обєкт з АРІ
            getAll.loading = false;
            state.cars = items;
            state.prevPage = prev;
            state.nextPage = next;

        })

});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    create,
    deleteById,
    setCarForUpdate,
    updateById
}

export {
    carReducer,
    carActions
}
//actions:{setCarForUpdate} - додаємо  в const carActions, бо створена в reducers
//getAll, create,    deleteById, - додаємо напряму в const carActions, бо створена через createAsyncThunk
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";


const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null,
    loading: null

};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll();
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
            thunkAPI.dispatch(getAll())       //знову перезавантажити всі кари та відрендерити на сторінці

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
            thunkAPI.dispatch(getAll())
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
            thunkAPI.dispatch(getAll())
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
            getAll.loading = false;
            state.cars = action.payload;

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
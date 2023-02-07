import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";
//______________________________________________________________________________________________________________________
//1 ф-я createSlice з обовязковими параметрами name, initialState, reducers

//state
const initialState = {
    users: [],
    error: null,
    loading: null,
    selectedUser: null

};

//______________________________________________________________________________________________________________________
//11) Ф-я для опису асинхвонний дій для зміни стору
const getAll = createAsyncThunk(
    'userSlice/getAll', //назва функції млайс+дія
    async (_, {rejectWithValue}) => { //arg - масив, чи обєкт, те що передаватимемо через payload (_ - якщо не треба цього параметра),
        // thunkAPI
        try {
            //з userService методом getAll отримаємо респонс, з якого заберемо data
            const {data} = await userService.getAll();
            //щоб віддати дані з data на свій слайс, потрібно їх повернути
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectWithValue, dispatch, getState,}) => {
        try {
            const {data} = await userService.getById(id);
            const state = getState();
            console.log(state);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

//______________________________________________________________________________________________________________________

//userSlice - це сам стор (сховище даних), який будує за нас action та reducer
const userSlice = createSlice({
    name: 'userSlice', //імя слайсу
    initialState,     //початковий стейт слайсу, виноситься як окрема змінна - обєкт, в якому буде щось зберігатися
    reducers: {       //обєкт в якому запис дії, які будуть запускатися при dispatch

////довільна назва ключа  обєкту  reducers : в якості value  будем передавати ф-ю, що прийматиме (state, action)
//         getAll: (state, action) => {

////звертаюся до юзерів стейту і вони тепер будуть дорівнювати тому що передам через dispatch -> (action.payload)
//             state.users = action.payload
//         },
//ф-я для selectedUser (що я буду передавати в state.selectedUser через dispatch -> (action.payload) )
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }
    },
//______________________________________________________________________________________________________________________
    //12) // extraReducers: {
    //     [getAll.fulfilled]: (state, action) => {
    //         state.loading = false
    //         state.users = action.payload
    //     },
    //     [getAll.rejected]:(state, action)=>{
    //         state.loading = false
    //         state.errors =action.payload
    //     },
    //     [getAll.pending]:(state)=>{
    //         state.loading = true
    //     }
    // }
    // або ін варіант 12)
    extraReducers: (value) =>
        value
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false //щоб не показувати loading коли статус fulfilled
                state.users = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.selectedUser = action.payload
            })


})
//______________________________________________________________________________________________________________________
//2) деструктуризовуємо userSlice і дістаємо з нього reducer, actions (getAll - забрали коли витягуємо через asynk await)
const {reducer: userReducer, actions: {setSelectedUser}} = userSlice;

//3) створюємо змінну
const userActions = {
    getAll,
    getById,
    setSelectedUser
}
export {
    userReducer,
    userActions,
    userSlice
}
//______________________________________________________________________________________________________________________
//4)підключаємо userSlice в загальний store : redux/store.js
import {createSlice} from "@reduxjs/toolkit";
//______________________________________________________________________________________________________________________
//1 ф-я createSlice з обовязковими парамертами name, initialState, reducers

//state
const initialState = {
    users: [],
    error: null,
    loading: null,
    selectedUser: null

};

//userSlice - це сам стор (сховище даних)б який будує за нас action та reducer
const userSlice = createSlice({
    name: 'userSlice', //імя слайсу
    initialState,     //початковий стейт слайсу, виноситься як окрема змінна - обєкт, в якому буде щось зберігатися
    reducers: {       //обєкт в якому запис дії, які будуть запускатися при dispatch

//довільна назва ключа  обєкту  reducers : в якості value  будем передавати ф-ю, що прийматиме (state, action)
        getAll: (state, action) => {

//звертаюся до юзерів стейту і вони тепер будуть дорівнювати тому що передам через dispatch -> (action.payload)
            state.users = action.payload
        },
//ф-я для selectedUser (що я буду передавати в state.selectedUser через dispatch -> (action.payload) )
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }

    }
})
//______________________________________________________________________________________________________________________
//2) деструктуризовуємо userSlice і дістаємо з нього reducer, actions
const {reducer: userReducer, actions: {getAll, setSelectedUser}} = userSlice;

//3) стовруємо змінну
const userActions = {
    getAll,
    setSelectedUser
}
export {
    userReducer,
    userActions
}
//______________________________________________________________________________________________________________________
//4)підключаємо userSlice в загальний store : redux/store.js
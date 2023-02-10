const baseURL = 'http://owu.linkpc.net/carsAPI/v2'

//два ендроїнти
const cars = '/cars';
const auth = '/auth';

const urls = {
    //http://owu.linkpc.net/carsAPI/v2/auth - веде на авторизацію. дані об'єкта зумовлені апі-документацією
    auth: {
        login: auth,                 // http://owu.linkpc.net/carsAPI/v2/auth/auth веде на авторизацію
        refresh: `${auth}/refresh`,  //http://owu.linkpc.net/carsAPI/v2/auth/auth/refresh
        me: `${auth}/me`             //чи користувач залогінений - http://owu.linkpc.net/carsAPI/v2/auth/me
    },
    //http://owu.linkpc.net/carsAPI/v2/cars
    cars: {
        cars,
        byId: (id) => `${cars}/${id}`
    },
    //реєстрація нового користувача
    users: '/users'
}

export {
    baseURL,
    urls
}
import {apiService} from "./apiService";
import {urls} from "../configs";

//ключі в localStorage (ключі access і refresh ті що в токені використовуємо константи, щоб не помилитися)

const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';

const authService = {
//cred те що отримали в формі (LoginPage).
//Коли роблю логін хочу відразу використ ф-ю setTokens і при запуску login сетатиме токени в localStorage
    login: async function (cred) {
        const response = await apiService.post(urls.auth.login, cred);
//коли статус мого response 200(ок), тоді звертатимуся до методу setTokens і передаватиму в нього з цього респонсу дату
        if (response.status === 200) {
            this.setTokens(response.data)
        }
        return response;
    },
    // передаю світ тонкін refresh, {refresh:refresh}
    refresh: async function (refresh) {
        const response = await apiService.post(urls.auth.refresh, {refresh})
        if (refresh.status === 200) {
            this.setTokens(refresh.data)
        }
        return response;
    },
    //для залогіненого користувача
    me: () => apiService.get(urls.auth.me),

//метод який буде сетати ті токети в localStorage tokens={access, refresh}
    setTokens: ({access, refresh}) => {
        localStorage.setItem(accessTokenKey, access);
        localStorage.setItem(refreshTokenKey, refresh);
    },

//метод getAccessToken повертатиме з localStorage по ключу accessTokenKey токін access
    getAccessToken: () => localStorage.getItem(accessTokenKey),
    getRefreshToken: () => localStorage.getItem(refreshTokenKey),

//метод що видалятиме токени
    deleteTokens: () => {
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey);
    },
//Я залогінений, якщо accessTokenKey є в localStorage. Метод, що повертатиме мені true/false чи є цей токен в localStorage

    isAuthenticated: () => !!localStorage.getItem(accessTokenKey)

}
export {
    authService
}
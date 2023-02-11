import axios from "axios";

import {baseURL} from "../configs";
import {authService} from "./authService";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

const apiService = axios.create({baseURL});

//request interceptor: - It allows you to write or execute a piece of your code before the request gets sent.
//response interceptor: - It allows you to write or execute a piece of your code before response reaches the calling end.

//(config)-(конфігурація)вся інформ. що є в запиті, перехоплена інформ.config-довільна назва

apiService.interceptors.request.use((config) => {

//певіряємо чи є access token, тобто чи ми залогінені.
//якщо є access token, то я в цю конфігурацію запиту (config), що є об'єктом з різними параметрами, в т ч headers,
// в які я додам новий ключ Authorization. В header я запишу стрічку `Bearer ${access}`
    const access = authService.getAccessToken();
    if (authService.isAuthenticated()) {
        config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
})
let isRefreshing = false;
//якщо термін дії access токіну вийшов, потрібно зробилити запит на refresh токін
apiService.interceptors.response.use((config) => {
//спочатку тре перевірити чи я знаходжуся в стані рефрешу чи ні, для того створюю змінну isRefreshing
        return config //в колбеку повертатиму дані, що прийшли
    },
    //другим параметром я буду підхоплювати помилки
    async (error) => {
        //перевіряємо чи є в localStorage мій refresh токін
        const refresh = authService.getAccessToken()
        //якщо в цій помилці є респонс і його статус код 401 && в мене буде мій refresh токін && я буду в стані нерефрешу
        if (error.response?.status === 401 && refresh && !isRefreshing) {
            //при цій умові я вже знаходжуся в стані рефрешу
            isRefreshing = true;
            //після цього роблю refresh
            try {
                //якщо рефрештокін живий я я його перезапишу
                await authService.refresh(refresh)
            } catch (e) {
                //якщо ні то я видалятиму з локалсторидж старі токіни
                authService.deleteTokens()
                history.replace('/login?expSession=true')
            }
            //після catch (e) в нас знову isRefreshing = false і йдемо далі куди мали йти-cars (apiService зроби ще раз запит на config - дані з карсів)
            isRefreshing = false;
            return apiService(error.config);
        }
        //якщо рефреш помер потрібно повернути проміс реджект
        return Promise.reject(error);

    }
)

export {
    apiService,
    history
}

//йду в index.js і заміняю history браузера на нашу history з apiService  через unstable_HistoryRouter as BrowserRouter history={history}
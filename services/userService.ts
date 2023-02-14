import {apiService} from "./apiService";

import {IUser} from "../interfaces/userInterface";
import {Ires} from "../interfaces/resInterface";
//type Ires<Data>=Promise<AxiosResponse<Data>>


const userService = {
    getAll: (): Ires<IUser[]> => apiService.get(`/users`)
}
export {
    userService
}
import {axiosService} from "./axiosService";

const launchService = {

    getAll: () => axiosService.get('')
}
export {
    launchService
}


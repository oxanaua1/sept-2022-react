import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentsService = {
    getAll: () => axiosService.get(urls.comments)
}
export {
    commentsService
}
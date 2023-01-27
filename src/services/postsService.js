import {urls} from "../configs";
import {axiosService} from "./axiosService";

const postsService = {
    getByPostId: (id) => axiosService.get(urls.postById(id))
}
export {
    postsService
}
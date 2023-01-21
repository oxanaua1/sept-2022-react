import {axiosService} from "./axiosService";

const postService = {

    getByUserId: (userId) => axiosService.get(`/posts`, {params: {userId}})
}
export {
    postService
}

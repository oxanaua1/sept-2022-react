const baseURL = 'https://jsonplaceholder.typicode.com'


const urls = {
    todos: '/todos',
    albums: '/albums',
    comments: '/comments',
    postById: (id) => `/posts/${id}`
}

export {
    baseURL, urls
}
import posts from './services/posts'
import { apiRoot } from './instance.js'

const api = {
    posts: posts(apiRoot),
}
export { api }

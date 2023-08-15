export default (api) => ({
    getPosts: () =>
      api.get(`/posts?_start=0&_limit=5`),
})

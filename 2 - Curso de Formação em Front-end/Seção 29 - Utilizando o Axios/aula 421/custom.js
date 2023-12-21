const postFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    headers: {
        accept: "application/json", Authorization: "meunovotoken"
    }
})
const getData = async() => {
    try{
        const response = await axios.get("http://jsonplaceholder.typicode.com/users")
        console.log(response)
    } catch(error){
        console.log(error)
        return response.data;
    }
}
getData();
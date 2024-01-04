import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

import "./Home.css"

const Home = () => {

    const [posts, setPosts]  = useState([])
    const getPosts = async() => {

        try {
            const response = await axios.getPosts("http://jsonplaceholder.typicode.com/posts")
            
            const data = response.data
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getPosts()
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Home
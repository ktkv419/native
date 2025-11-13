import { useEffect, useState } from "react"

const Fetch = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        try {
            const res = fetch("https://jsonplaceholder.org/posts")
        } catch (error) {
            
        }
    }, [])

    return (
        <div className="container">

        </div>
    )
}

export default Fetch
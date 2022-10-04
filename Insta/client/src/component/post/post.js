import { useEffect, useState } from "react"

import Card from "../../card"
import Header from "../header/header"

const Post = () => {



    const [users, setUsers] = useState([])

    const fetchData = () => {
        fetch("https://instaonep-app.herokuapp.com/all")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Header />
            <div className="post-container">
                {Array.isArray(users)
                    ? users.map(element => {
                        return (
                            <>
                                <Card post={element}  />

                            </>
                        )
                    }
                    )

                    : null}


            </div>
        </>
    )
}
export default Post;
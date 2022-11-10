import { useState } from "react"
import { EmptyStatement } from "typescript"

// Interface is only for Object/Classes
// interface Posts {
//     posts: Array<string>
// }

type Posts = Array<string>

const ListPosts = () => {
    let [postsData, setPostsData] = useState<Posts | []>([])

    const getPosts = async () => {
        try {
            const res = await fetch("/posts")
            const data = await res.json()

            setPostsData(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <h4>List Posts</h4>
            {postsData ? 
                postsData.map((post: string) => {
                    return (
                        <p>Testing</p>
                    )
                })
             : <p>No posts</p>}
        </>
    )
}

export default ListPosts
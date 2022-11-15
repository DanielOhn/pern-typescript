import { useState, useEffect, SyntheticEvent } from 'react'
// Interface is only for Object/Classes

interface Post {
  post_id: number
  text: string
}

type PostData = Array<string>

const ListPosts = () => {
  let [postsData, setPostsData] = useState<PostData | []>([])

  const getPosts = async () => {
    try {
      const res = await fetch('/posts')
      const data = await res.json()

      setPostsData(data)
    } catch (err) {
      console.log(err)
    }
  }

  const deletePost = async (id: number) => {
    try {
      const deletePost = await fetch(`/posts/${id}`, {
        method: 'DELETE',
      })
      console.log(deletePost)
      setPostsData(postsData.filter((post: any) => post.post_id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <h4>List Posts</h4>
      {postsData ? (
        postsData.map((post: any) => {
          return (
            <div key={post.post_id}>
              <p>{post.text}</p>
              <button onClick={(e: SyntheticEvent) => deletePost(post.post_id)}>
                D
              </button>
              <button>E</button>
            </div>
          )
        })
      ) : (
        <p>No posts</p>
      )}
    </>
  )
}

export default ListPosts

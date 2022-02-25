import React, { useCallback, useEffect, useState } from "react";
import PostsList from "./components/PostsList";


function App() {
  const [data, setData] = useState([])

  const fetchPostsHandler = useCallback( async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    const data = await response.json()

    const loaderPosts = data.map((element) => {
      return {
        id: element.id,
        title: element.title,
        img: element.thumbnailUrl,
      }
    })
    setData([...loaderPosts])
  }, [])
  console.log(data);

  useEffect(() => {
    fetchPostsHandler();
  }, [fetchPostsHandler])

  return (
    <div className="App">
        <PostsList data={data} />
    </div>
  )
}

export default App;

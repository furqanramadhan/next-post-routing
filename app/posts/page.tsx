import CardList from "../components/Posts/CardList"
import ViewUserButton from "../components/Posts/ViewUserButton"

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface Ipost{
  userId: number,
  id : number,
  title : string,
  body : string
}

const Posts = async() =>{
  const response = await fetch(base_url, {
    //next:  {revalidate: 3600}
     cache : "no-store"
  })
  const posts: Ipost[] = await response.json()
  return(
    <>
    <p>{new Date().toLocaleTimeString()}</p>
    <div className="text-fuschia-500"> Post Page </div>
      {posts.map((posts) => {
        return (
          <CardList key = {posts.id}>
            <p>{posts.id}</p>
            <i>{posts.title}</i>
            <p>{posts.body}</p>
            <ViewUserButton userId = {posts.userId}/>
          </CardList>
        )
      })}
    </>
  )
}

export default Posts
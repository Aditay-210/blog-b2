import { useEffect, useState } from "react";

function Home(){
//let title ="This is my title";
const [title, setTitle] = useState("This is my title");
function changeMyTitle(){
  setTitle (" This is my new title");
  console.log(title);
}
useEffect(() => {
  // Fetch data from JSONPlaceholder API when the component mounts
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      // Update the title with the fetched data
      setTitle(json.title);
    });
}, []); 

    return(
    <div className="blog-list">
      <h2>Blog</h2>
      <h2>{title}</h2>
      <button onClick={changeMyTitle}
      >Cick me</button>
    
    </div>
    );}
export default Home;
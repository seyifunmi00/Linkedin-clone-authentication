import {CalendarViewDay, Create, EventNote, Image, Subscriptions} from "@mui/icons-material";
import InputOptions from "./InputOptions.jsx";
import Posts from "./Posts.jsx";
import {useEffect, useState} from "react";



import { subscribeToPosts, submitPost} from "./databasefunctions.js";
import {useSelector} from "react-redux";
import {selectUser} from "./userSlice.js";
import FlipMove from "react-flip-move";



const Feed = () => {
 const [posts, setPosts] = useState([]);
 const [message, setMessage] =useState("")

 const {displayName , email, photoUrl} = useSelector(selectUser)




 useEffect(() => {
  // Subscribe to real-time updates
  const unsubscribe = subscribeToPosts((data) => {
   setPosts(data);
  });

  // Cleanup listener on unmount
  return () => unsubscribe();
 }, []);



 const sendPost = (e) =>{
    e.preventDefault()
    const postMessage = async () => {
     if (message.trim()) {
      await submitPost(message, displayName, email, photoUrl); // Pass the input as the post content
          setMessage(""); // Clear the input field
     }
    }

    postMessage();
 }

 return (
  <div className="feed w-[60%] mx-[20px] ">
     <div className="feed-input-container bg-white p-[10px] pb-[20px] rounded-lg mb-[20px]">
      <div className="feed-input flex border-2 border-gray-200 p-[10px] pl-[15px] text-gray-600 rounded-[30px]">
       <Create/>
       <form className="flex w-[100%] ">
        <input type="text" placeholder="Write a message..." className='flex-1 ml-[10px] focus:outline-0' value={message} onChange={(e) =>setMessage(e.target.value)}/>
        <button type="submit" onClick={sendPost} className=''>Send</button>
       </form>
      </div>

      <div className='feed-inputoptions flex justify-evenly ' >
      {/* Input Options*/}
       <InputOptions Icon={Image} title='Photo' color="#70B5F9" />
       <InputOptions Icon={Subscriptions} title='Video' color="#E7A33E" />
       <InputOptions Icon={EventNote} title='Event' color="#C0CBCD" />
       <InputOptions Icon={CalendarViewDay} title='Write article' color="#7FC15E" />
      </div>

     </div>


  {/* Posts*/}
<FlipMove>
 {
  posts.map((post) => (
   <Posts key={post.id} post={post}  />
  ))
 }

</FlipMove>



  </div>
 );
};

export default Feed;

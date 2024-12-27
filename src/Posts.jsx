
import {Avatar} from "@mui/material";
import InputOptions from "./InputOptions.jsx";
import {

 ChatOutlined,
  SendOutlined,
ShareOutlined,

 ThumbUpOffAltOutlined
} from "@mui/icons-material"
import {forwardRef} from 'react'


const Posts = forwardRef(({post}, ref) => {
 const {name, description, message, timestamp, photoUrl} = post;



 return (
  <div ref={ref} className='post bg-white  p-[15px] mb-2 rounded-lg shadow-lg'>
   <div className="post-header flex mb-2 ">
    <Avatar src={photoUrl}> {name[0]}</Avatar>
    <div className="ml-2 ">
     <h2 className="text-[15px] font-extrabold">{name}</h2>
     <p className='text-[12px] text-gray-700'>{description}</p>
    </div>
   </div>

   <div className="post-body">
    <p className="overflow-wrap-anywhere">{message}</p>
   </div>

   <div className="posts-Buttons flex items-center justify-between">
    <InputOptions Icon={ThumbUpOffAltOutlined} color="gray" title="Like"/>
    <InputOptions Icon={ChatOutlined} color="gray" title="Comment"/>
    <InputOptions Icon={ShareOutlined} color="gray" title="Share"/>
    <InputOptions Icon={SendOutlined} color="gray" title="Send"/>
    <p className='text-[12px] text-gray-700 mt-[15px]'>{timestamp}</p>
   </div>
  </div>
 );
});

export default Posts;

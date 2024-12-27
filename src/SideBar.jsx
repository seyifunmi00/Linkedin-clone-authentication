import { Avatar } from "@mui/material";
import download from "./assets/download.jpg";
import {useSelector} from "react-redux";
import {selectUser} from "./userSlice.js";

const SideBar = () => {

 const {email, displayName, photoUrl} = useSelector(selectUser)



 const recentItems = (topic) => {
 return  <div className="flex text-[13px] text-gray-500 font-bold cursor-pointer mb-[5px] p-[5px] hover:bg-[whitesmoke] hover:text-black hover:cursor-pointer">
   <span className="mx-1">#</span>
    <p>{topic}</p>
  </div>
 }




 return (
  <div className='w-[20%]'>

   <div className="w-full sticky top-[80px] rounded-lg text-center h-auto ">
    <div
     className="sideBar-top flex flex-col items-center border-b-0 border-gray-200 border-2 pb-[10px] rounded-tr-lg rounded-tl-lg bg-white ">
     <img
      src={download}
      alt=""
      className="-mb-[20px] w-full h-[60px] rounded-tr-lg rounded-tl-lg object-cover"
     />
     <Avatar className="mb-[10px]"> {displayName ? displayName[0] : "?"}</Avatar>
     <h2 className="font-bold text-[18px] text-xl px-2">{displayName}</h2>
     <h4 className="font-semibold text-[12px] text-gray-600 px-2">
      {email}
     </h4>
    </div>
    <div className="sideBar-stats p-[10px] bg-white mb-[10px] rounded-bl-lg border-2 border-gray-300 rounded-br-lg">
     <div className="stats mt-4 flex justify-between">
      <p className="text-gray-500 text-[13px] font-[600]">Who viewed you</p>
      <p className="text-[#0a66c2] text-[13px] font-bold">2,543</p>
     </div>

     <div className="stats flex justify-between">
      <p className="text-gray-500 text-[13px] font-[600]">Views on post</p>
      <p className="text-[#0a66c2] text-[13px] font-bold">2,500</p>
     </div>
    </div>

    <div
     className="sideBar-bottom text-left p-[10px] border-2 border-gray-300 bg-white rounded-lg mt-[10px] font-extrabold">
     <p>Recent</p>
     {recentItems('reactjs')}
     {recentItems('Programming')}
     {recentItems('softwareengineering')}
     {recentItems('designs')}
     {recentItems('developer')}
    </div>
   </div>
  </div>
 );
};

export default SideBar;

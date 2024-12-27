import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from "./HeaderOptions.jsx";
import HomeIcon from '@mui/icons-material/Home';
import {BusinessCenter, Chat, Notifications, SupervisorAccount} from "@mui/icons-material";
import images from "./assets/images.jpg"
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "./userSlice.js";
import {auth} from "./firebase.js";
import { signOut} from 'firebase/auth';


const Header = () => {

 const dispatch = useDispatch();


 const logOutOfApp = async () => {
    dispatch(logout())
  await signOut(auth)
 }



 return (
  <div className=" flex justify-evenly border-b-2 border-gray-200 py-[10px] w-full sticky top-0 z-[999] bg-white">




   <div className="Header-left flex items-center justify-center" >
    <img src="/linkedin.png" alt="logo" className="h-[40px] object-contain mr-[10px]" />

    <div className="Header-search flex items-center justify-center p-[10px] rounded-sm bg-[#eef3f8] ">

       <SearchIcon />
       <input type="text" placeholder="Search..." className=' bg-transparent border-0 outline-0' />

    </div>


   </div>


   <div className="Header-right flex ">
    <HeaderOptions title="LinkedIn" Icon ={HomeIcon} />
    <HeaderOptions title="My Network" Icon ={SupervisorAccount} />
    <HeaderOptions title="Jobs" Icon ={BusinessCenter} />
   < HeaderOptions title="Messaging" Icon ={Chat} />
    <HeaderOptions title="Notifications" Icon ={Notifications} />
    <HeaderOptions avatar={true} title="me" onClick={logOutOfApp}/>
   </div>
  </div>
 );
};

export default Header;

import {useSelector} from "react-redux";
import {selectUser} from "./userSlice.js";
import {Avatar} from "@mui/material";
import "./index.css"


const HeaderOptions = ({avatar, title, Icon, onClick}) => {
 const user = useSelector(selectUser)


 return (
  <div className="flex flex-col items-center mr-[20px] text-gray-600 cursor-pointer hover:text-black" onClick={onClick}>
   {Icon && <Icon name={Icon} className="mr-1" />}
   {avatar && user?.displayName && (
    <Avatar
     sx={{ width: '24px', height: '24px', objectFit: 'contain' }}
    >
     {user.displayName[0]}
    </Avatar>
   )}

   <h3 className="text-[12px] font-[400]">{title}</h3>
  </div>
 );
};

export default HeaderOptions;

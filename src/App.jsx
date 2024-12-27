import Header from "./Haeder.jsx";
import SideBar from "./SideBar.jsx";
import Feed from "./Feed.jsx";
import { useDispatch, useSelector } from "react-redux";
import {login, logout, selectUser} from "./userSlice.js";
import Login from "./Login.jsx";
import { useEffect } from "react";
import { auth } from "./firebase.js";
import Widgets from "./Widgets.jsx";

const App = () => {
 const user = useSelector(selectUser);
 const dispatch = useDispatch();

 useEffect(() => {
  auth.onAuthStateChanged((userAuth) => {
   if (userAuth) {
    dispatch(login({
     email: userAuth.email,
     uid: userAuth.uid,
     displayName: userAuth.displayName,
     photoUrl: userAuth.photoURL,
    }));
   } else {
    dispatch(logout());
   }
  });
 }, []);

 return (
  <div className="bg-[#f3f2ef] flex flex-col items-center min-h-screen ">
   <Header />

   {user ? (
    <div className="flex w-full  h-auto mt-[20px] px-[20px] max-w-[1200px]">

     <SideBar />


     <Feed />

    <Widgets/>
    </div>
   ) : (
    <Login />
   )}
  </div>
 );
};

export default App;

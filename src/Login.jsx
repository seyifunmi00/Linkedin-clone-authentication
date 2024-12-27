import {auth} from "./firebase.js";
import {useState} from "react";
import {createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from 'firebase/auth'
import {useDispatch} from "react-redux";
import {login} from "./userSlice.js";


const Login = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [profilePic, setProfilePic] = useState("");

 const dispatch = useDispatch();



 const register = () => {
  if (!name) {
   return alert("Please enter a fullname");
  }

  // Create user with email and password using Firebase v9+
  createUserWithEmailAndPassword(auth, email, password)
   .then((userAuth) => {
    // After user creation, update the profile with displayName and photoURL
    return updateProfile(userAuth.user, {
     displayName: name,
     photoURL: profilePic,
    }).then(() => {
     // Dispatch login action to Redux after successful profile update
     dispatch(login({
      email: userAuth.user.email,
      uid: userAuth.user.uid,  // Use the unique Firebase UID
      displayName: name,
      photoUrl: profilePic,
     }));
    });
   })
   .catch((err) => {
    // Handle any errors during user creation or profile update
    alert(err.message);
   });
 };


 const logInToApp = (e) => {
    e.preventDefault();
    try {
       signInWithEmailAndPassword(auth, email, password).then(userAuth => {
        dispatch(login({
         email: userAuth.user.email,
         uid: userAuth.user.uid,  // Use the unique Firebase UID
         displayName: userAuth.user.displayName,
         photoUrl: userAuth.user.photoURL,
        }))
       })
    }catch (error) {
     alert(error.message)
    }
 }


 return (
  <div className='flex flex-col items-center mx-auto py-[100px]'>
   <img src="/linkedin.png" className="object-contain w-[70px] my-[20px]"/>

   <form className='flex flex-col items-center mx-auto'>
    <input placeholder="Fullname... (required if registering)" className="w-[350px] h-[50px] text-[15px] pl-2 mb-2 rounded-xl" type='text' value={name} onChange={(e) => setName(e.target.value)}/>
    {/*<input placeholder='Profile picture URL (optional)' className="w-[350px] h-[50px] text-[15px] pl-2 mb-2 rounded-xl" type='text' value={profilePic} onChange={(e) => setProfilePic(e.target.value)} />*/}
    <input placeholder='Email....' className="w-[350px] h-[50px] text-[15px] pl-2 mb-2 rounded-xl" type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
    <input placeholder='Password....' className="w-[350px] h-[50px] text-[15px] pl-2 mb-2 rounded-xl" type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    <button type="submit" onClick={logInToApp} className="w-[350px] h-[50px] text-lg text-white bg-[#0074b1] rounded-md">Sign In</button>
   </form>

   <p className="mt-4">Not a member? {' '}
   <span className="text-[#0017b7] cursor-pointer" onClick={register}>Register Now</span>
   </p>

  </div>
 );
};

export default Login;

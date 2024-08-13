import React from 'react'
import {auth} from '../utils/firebase';
import {signOut} from "firebase/auth";
import {useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
  const user = useSelector((store)=> store.user);
 const navigate = useNavigate();

 const  handelSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };
  return (
    <div className='absolute w-screen px-8  py-2 bg-gradient-to-b from-black z-40 flex justify-between'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflixlogo'/>
      { user && <div className='m-5 flex'>

        <img className='w-10 h-10  rounded-lg' src={user?.photoURL} alt='usericons'/>
        {user.displayName && (
            <span className='text-white mt-2 ml-3'>{user.displayName}</span>
          )}
        <button onClick={handelSignOut} className='hover: ml-3 w-20  bg-red-800 hover:bg-red-600 active:bg-red-700 focus:outline-none rounded-lg text-white '>Sign Out</button>
      </div>}
    </div>
    
  )
}

export default Header

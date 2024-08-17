import React, { useEffect } from 'react'
import {auth} from '../utils/firebase';
import {onAuthStateChanged, signOut} from "firebase/auth";
import {useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import { NetflixLOGO } from '../utils/constants';

const Header = () => {
  const user = useSelector((store)=> store.user);
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const  handelSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL:photoURL}));
          navigate("/browse");
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/");
        }
      });
      //unsubcribes when component unmounts
      return() => unsubscribe();
},[])
  return (
    <div className='absolute w-screen px-8  py-2 bg-gradient-to-b from-black z-40 flex justify-between'>
      <img className='w-44' src={NetflixLOGO} alt='netflixlogo'/>
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

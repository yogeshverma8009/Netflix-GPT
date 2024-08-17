import React from 'react';
import { FaPlayCircle } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r  from-black w-screen aspect-video'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-3/4 md:w-1/2 lg:w-1/3'>{overview}</p>
      <div className='flex '>
        <button className='bg-white text-black p-4 px-8 text-xl flex items-center space-x-3 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105'>
          <FaPlayCircle className='text-3xl transition-transform duration-300 ease-in-out transform hover:scale-150'/>
          <span>Play</span>
        </button>
        <div>
        <button className='bg-black hover:bg-black text-white p-4 px-8 text-xl flex items-center space-x-2 rounded-lg bg-opacity-55 mx-4  transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <IoInformationCircle className='text-3xl transition-transform duration-300 ease-in-out transform hover:scale-150'/>
          <span>More Info</span>
        </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;

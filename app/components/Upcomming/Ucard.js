import React from 'react'
import { FaPlay } from "react-icons/fa";
const Ucard = ({ item: { id, cover, name, time } }) => {
  return (
    <>
       <div className='MovieBox'>
        <div className='img'>
          <img src={cover.src} alt='' />
        </div>
        <div className='text py-20 px-12 text-white'>
          <h3 className='font-medium mb-4'>{name}</h3>
          <span>{time}</span> <br />
          {/*<Link to={`/singlepage/${id}`}>*/}
          <button className='primary-btn text-sm mt-4 flex items-center gap-1 text-white py-2 px-3 bg-red-600'><span className='text-white'><FaPlay/></span>PLAY NOW</button>
          {/*</Link>*/}
        </div>
      </div>
    </>
  )
}

export default Ucard

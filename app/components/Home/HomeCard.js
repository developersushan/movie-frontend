import Image from 'next/image'
import React from 'react'
import ReactStars from "react-rating-stars-component";
import { FaPlay } from "react-icons/fa";
import Link from 'next/link';
import PlayButton from '../../../images/play-button.png'
import Play from '../../../images/play.png'
const HomeCard = ({item:{id,cover,name,rating,time,desc,starring,genres,tags,video}}) => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
            <img src={cover.src}  alt="cover" />
        </div>
        <div className='content flex'>
        <div className='details row'>
            <h1>{name}</h1>
        <div className='rating my-6 mx-0'>
            <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ff0000" color="#ff4a02"/>
        </div>
         <label className='my-0 mx-5'  htmlFor="">{rating}</label>
         <span className='bg-[#6c757d] p-1 text-white font-bold' >GP</span>
         <label htmlFor="">{time}</label>
         <p>{desc}</p>
         <div className='cast my-6 mx-0'>
            <h4 className='font-medium mb-2 text-base'>
                <span className='text-red-500'>starring</span>
                {starring}
            </h4>
            <h4>
                <span>Genres</span>
                {genres}
            </h4>
            <h4>
                <span>Tags</span>
                {tags}
            </h4>
        </div >
        <button className='primary-btn flex items-center gap-1 text-white py-2 px-2 bg-red-500'><span className='text-white'><FaPlay/></span>PLAY NOW</button>
        </div>
        <div className='playButton row flex justify-center items-center'>
            <Link href={`/singlePage/${id}`}>
                <button className='p-0 m-0 flex items-center justify-center text-base font-medium latter-spacing-2 transition-0.5'>
                    <div className='img relative'>
                    <Image src={PlayButton} width={50} height={50} alt="" />
                    <Image src={Play} width={50} height={50} alt="" className='change absolute top-0 left-0 opacity-0' />
                    </div>
                    WATCH TRAILER
                </button>
            </Link>
        </div>
        </div>

      </div>
    </>
  )
}

export default HomeCard

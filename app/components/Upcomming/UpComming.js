"use client"
import Link from 'next/link'
import React from 'react'
import Ucard from "./Ucard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FiChevronRight ,FiChevronLeft} from "react-icons/fi";


const SimpleNextArrow =(props)=>{
  const {onClick} =props
  return <div className='control-btn' onClick={onClick}>
      <button className='next'>
    <span className='text-2xl mx-auto text-white flex justify-center items-center'>
    <FiChevronRight/>
    </span>
     </button>
  </div>
}
const SimplePrevArrow =(props)=>{
  const {onClick} =props
  return <div className='control-btn' onClick={onClick}>
      <button className='prev'>
          <span className='text-2xl mx-auto text-white flex justify-center items-center'>
          <FiChevronLeft/>
          </span>
      </button>
  </div>
}
const UpComming = ({itemsUp,title}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SimpleNextArrow />,
    prevArrow: <SimplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
       <section className='upcome '>
        <div className='container mx-auto'>
          <div className='heading flexSB text-white flex justify-between'>
            <h1 className='text-2xl font-medium'>{title}</h1>
            <Link href='/'>View All</Link>
          </div>
          <div className='content'>
            <Slider {...settings}>
              {itemsUp.map((item) => {
                return (
                  <>
                    <Ucard key={item.id} item={item} />
                  </>
                )
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default UpComming

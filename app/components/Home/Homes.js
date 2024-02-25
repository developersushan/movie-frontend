import React from 'react'
import HomeCard from './HomeCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiChevronRight ,FiChevronLeft} from "react-icons/fi";

const SimpleNextArrow =(props)=>{
    const {onClick} =props
    return <div className='control-btn' onClick={onClick}>
        <button className='next'>
      <span className='text-2xl mx-auto flex justify-center items-center'>
      <FiChevronRight/>
      </span>
       </button>
    </div>
}
const SimplePrevArrow =(props)=>{
    const {onClick} =props
    return <div className='control-btn' onClick={onClick}>
        <button className='prev'>
            <span className='text-2xl mx-auto flex justify-center items-center'>
            <FiChevronLeft/>
            </span>
        </button>
    </div>
}
const Homes = ({items}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<SimpleNextArrow/>,
        prevArrow:<SimplePrevArrow/>,
      };
  return (
    <>
     <div className='homeContainer '>
     <Slider {...settings}>
     {items.map((item)=>(
        <HomeCard key={item.id} item={item} />
     ))}   
     </Slider>
    </div> 
    </>
  )
}

export default Homes

"use client"
import React, { useState } from 'react'
import Homes from './Homes'
import { homeData } from '@/public/homeData'
import './home.css'
import UpComming from '../Upcomming/UpComming'
import { upcome } from '@/public/upcome'
import { latest } from '@/public/latest'
import Trending from '../Trending/Trending'
const HomePage = () => {
  const [items,setItems] = useState(homeData)
  const [itemsUp,setItemsUp] = useState(upcome)
  const [item,setItem] = useState(latest)
  console.log(items)
  return (
    <div>
     <div className='home '>
      <Homes items={items}/>
     </div>
     <div className='margin'>
      <UpComming itemsUp={itemsUp} title='Upcomming Movies'></UpComming>
      <UpComming itemsUp={item} title='Latest Movies'></UpComming>
      <Trending></Trending>
     </div>
    </div>
  )
}

export default HomePage

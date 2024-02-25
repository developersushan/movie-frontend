"use client"
import React, { useState } from 'react'
import Homes from './Homes'
import { homeData } from '@/public/homeData'
import './home.css'
const HomePage = () => {
  const [items,setItems] = useState(homeData)
  console.log(items)
  return (
    <div>
     <div className='home '>
      <Homes items={items}/>
     </div>
     <div className='margin'></div>
    </div>
  )
}

export default HomePage

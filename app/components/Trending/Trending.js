import React, { useState } from 'react'
import Homes from '../Home/Homes'
import { trending } from '@/public/trending'

const Trending = () => {
  const [items,setItems] = useState(trending)
  return (
    <>
            <section className='trending text-white mt-12'>
        <Homes items={items} />
      </section>
    </>
  )
}

export default Trending

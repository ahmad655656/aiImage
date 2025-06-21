import Image from 'next/image'
import React from 'react'
import FaqCard from './FaqCard'

const Faq = () => {
  return (
    <div id="faq" className='pt-16 pb-16 bg-gray-950'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
            <div data-aos="zoom-out" data-aos-anchor-placements="top-center">
                <Image src={"/images/faq.png"} alt="image" width={500} height={500} />
            </div>
            {/* Faq Card */}
            <div>
                <FaqCard />
            </div>
        </div>
    </div>
  )
}

export default Faq
import ServiceSlider from '@/components/ServiceSlider'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='flex items-center bg-[#33034f] h-screen overflow-hidden'>
        <div className='pl-20 md:pl-60 flex flex-col gap-3 pb-60 md:pb-0'>
        <h1 className="text-[50px] text-white font-semibold">
        My Skills<span className="text-red-500">.</span>
        </h1>
        <p className="max-w-[350px] text-[16px] text-gray-200 md:text-gray-400">
        My expertise encompasses web development, SEO optimization, and graphic design, all finely honed to meet the challenges of today's digital landscapes. I am committed to continual learning and mastery in my crafts, ensuring each project not only meets but exceeds expectations. Let’s collaborate to amplify your digital presence through innovative solutions and expert execution. Together, we can achieve exceptional results.
        </p>
        </div>
        <div className='absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75'>
      <Image
      src="/assets/bulb.png"
      alt='bulb'
      width={260}
      height={260}
      className='w-full h-full hidden md:block'
      />
        </div>
        <ServiceSlider />
    </div>
  )
}

export default Page
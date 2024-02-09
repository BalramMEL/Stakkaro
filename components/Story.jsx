import { Button } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'
import { RupeeIcon } from './home/RupeeIcon'

const Story = () => {
  return (
      <div className='flex flex-col mt-9 md:mx-10'>
          <h1 className="text-center text-xl tracking-wider text-wrap font-medium text-[#E68F50]">Stay Ahead! <br /> Launch Your Next Project with Stackkaroo</h1>

          <div className='flex flex-col md:flex-row rounded-3xl bg-gray-800 text-white mt-4' >
        <div className='flex-col m-5'>  
          <div>
            <h2 className='font-semibold text-primary-500 text-2xl mt-5 md:mt-0'>Our Story</h2>
          </div>
          <div className='font-light text-wrap'>
                  <p className='mt-3'>
                          Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra bring their extensive experience to the forefront as industry veterans. Our team is fueled by innovation, continually striving to exceed customer expectations
                </p>
                  <p className='mt-3'>
                          Operating from our registered office in Agartala Sadar, Tripura (W), our company is officially registered with the Corporate Identification Number (CIN). Our active status and an authorized share capital of Rs 10.00 lac are a source of pride
                </p>
          </div>          
          <div>
              <Button endContent={<RupeeIcon/>} radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-md mt-5 mb-11">
                Get Estimated Project Cost
              </Button>          
          </div>        
          
        </div>
          <Image
                src="/Images/image2.png"
                width={500}
                height={500}
          alt="Picture of the author"          
        />           
      </div>
    </div>
  )
}

export default Story
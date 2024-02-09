import React from 'react'
import {Button} from "@nextui-org/react";
import { Callicon } from './Callicon';
import Image from 'next/image';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Expertise from '../Expertise';
import Story from '../Story';
import WhyChooseUs from '../chooseUs/WhyChooseUs';
import DigitalServices from '../digitalServices/DigitalServices';
import SeoServices from '../SEO/SeoServices';
import TalentHire from '../talent/TalentHire';

const HomePage = () => {
  return (
    <MaxWidthWrapper >
      <div className='text-white mb-3' style={{background: "linear-gradient(135deg, hsla(219, 50%, 8%, 1) 0%, hsla(243, 10%, 47%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)"}}>      
      <div className='flex flex-col md:flex-row rounded-3xl bg-gray-700 text-white md:mx-10' style={{background: "linear-gradient(135deg, hsla(219, 50%, 8%, 1) 0%, hsla(217, 19%, 27%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)"}}>
        <div className='flex-col m-5'>  
          <div>
            <h2 className='font-semibold text-primary-500 text-2xl mt-5 md:mt-0'>Diversifying the Designs of Digital World</h2>
          </div>
          <div className='font-light text-wrap'>
                  <p className='mt-3'>
                      Explorogent International Services Private Limited (EISPL) is one of the most famous companies in the sector of Web and Mobile Development. In the market, EISPL has a strong presence in providing quality services to its clients.
                  </p>
                  <p className='mt-3'>
                      EISPL is convinced that one should diversify the offering, given the changing needs of the clients. That is why we engage in multiple projects and activities. We also possess knowledge in web development, app development, UI/UX design, as well as digital marketing
                  </p>
          </div>          
          <div>
              <Button endContent={<Callicon/>} radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-lg mt-5 mb-11">
                Book a call
              </Button>          
          </div>           
        </div>
          <Image
                src="/Images/image1.png"
                width={500}
                height={500}
          alt="Picture of the author"          
        />           
        </div>
        
          <Expertise />
          <Story />
          <WhyChooseUs />
        <DigitalServices />
        <SeoServices />   
        <TalentHire />
        </div>
      </MaxWidthWrapper>
  )
}

export default HomePage
import React from 'react'
import DigiCards from './DigiCards'

const DigitalServices = () => {
  return (
    <div className='mx-1 md:my-10 my-6'>
        <div className='flex flex-col text-wrap gap-y-3'>
              <h2 className="text-center text-xl tracking-wider font-medium text-[#E68F50]">Stackkaroo’s Digital Services</h2>
              <p className="text-center mb-3">
                  We excel with reliability, innovation and customer-centric approach for our quality products. <br/> Our dedicated team ensures that the solutions provided are dependable and long-term
              </p>              
      </div>  
      <div>
        <DigiCards />
      </div>
    </div>
  )
}

export default DigitalServices
import React from 'react'
import TalentCard from './TalentCard'

const TalentHire = () => {
  return (
     <div className='md:mx-10  mb-3'>
        <div className='flex flex-col text-wrap gap-y-3 mx-1 mt-8'>
              <h2 className="text-center text-xl tracking-wider font-medium text-[#E68F50]">Stackkaroo’s Talent Hiring & Job Placement Services</h2>
              <p className="text-center mb-3">
                  We are a talent searching platform that redesigns how companies hire talents. It is a cost-effective solution for industries. We also provide global job opportunities with good salaries, support, and professional development.
              </p>              
         </div>  
          <div>
      <TalentCard />      
      </div>
    </div>
  )
}

export default TalentHire
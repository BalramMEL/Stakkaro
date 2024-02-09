import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import hire1 from "../../public/Images/hire1.png"
import hire2 from "../../public/Images/hire2.png"
import hire3 from "../../public/Images/hire3.png"
import hire4 from "../../public/Images/hire4.png"
import hire5 from "../../public/Images/hire5.png"
import hire6 from "../../public/Images/hire6.png"

const talent = [
  {
    name: 'Unleashing Top Talent Globally',  
    image: hire1,
    description: 'We offer 5% top talents and supports companies hiring from various time zones.',
  },
  {
      name: 'Securing Success', 
      image: hire2,
    description: 'The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.',
  },
  {
      name: 'Beyond Borders', 
    image: hire3,  
    description: 
      "We provide both, flexible full-time and part-time jobs"
  },
  {
      name: 'Efficiency Redefined',
    image: hire4,  
    description: 
      "The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent."
  },
  {
      name: 'Simplified Contracts Satisfied Partnerships', 
    image: hire5,  
    description: 
      "The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support."
    },
  {
      name: 'Efficiency Redefined',    
      image: hire6,
    description: 
      "The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent."
  },
]

const TalentCard = () => {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-10 p-3'>
          <Card className="max-w-[300px] p-4 flex items-center justify-center" style={{ height: "fit-content", minHeight: "250px", background: "linear-gradient(135deg, hsla(219, 14%, 24%, 1) 27%, hsla(219, 50%, 8%, 1) 100%, hsla(217, 19%, 27%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)" }}>             
                
                  <CardHeader className="flex items-center justify-center gap-3">
                      <Image
                      alt="logo"
                      height={40}
                      radius="sm"
                      src="/Images/hire1.png"
                        width={40}
                      style={{boxShadow: "rgba(128, 128, 128, 0.2) 0px 2px 8px 0px"}}  
                      />
                  </CardHeader>
                      <div className="flex px-3">
                          <p className="text-md text-wrap text-base font-medium text-orange-300">Unleashing Top Talent Globally</p>          
                      </div>
                  
                  <CardBody className='flex text-wrap items-center text-sm tracking-wider px-1'>
                      <p className="text-sm text-center text-slate-300">We offer 5% top talents and supports companies hiring from various time zones.</p>
                  </CardBody>               
            </Card>
            
          <Card className="max-w-[300px] p-4 flex items-center justify-center" style={{ height: "fit-content", minHeight: "250px", background: "linear-gradient(135deg, hsla(219, 14%, 24%, 1) 27%, hsla(219, 50%, 8%, 1) 100%, hsla(217, 19%, 27%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)" }}>             
                
                  <CardHeader className="flex items-center justify-center gap-3">
                      <Image
                      alt="logo"
                      height={40}
                      radius="sm"
                      src="/Images/hire2.png"
                        width={40}
                      style={{boxShadow: "rgba(128, 128, 128, 0.2) 0px 2px 8px 0px"}}  
                      />
                  </CardHeader>
                      <div className="flex px-3">
                          <p className="text-md text-wrap text-base font-medium text-orange-300">Securing Success</p>          
                      </div>
                  
                  <CardBody className='flex text-wrap items-center text-sm tracking-wider px-1'>
                      <p className="text-sm text-center text-slate-300">The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.</p>
                  </CardBody>               
            </Card>
            
          <Card className="max-w-[300px] p-4 flex items-center justify-center" style={{ height: "fit-content", minHeight: "250px", background: "linear-gradient(135deg, hsla(219, 14%, 24%, 1) 27%, hsla(219, 50%, 8%, 1) 100%, hsla(217, 19%, 27%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)" }}>             
                
                  <CardHeader className="flex items-center justify-center gap-3">
                      <Image
                      alt="logo"
                      height={40}
                      radius="sm"
                      src="/Images/hire3.png"
                        width={40}
                      style={{boxShadow: "rgba(128, 128, 128, 0.2) 0px 2px 8px 0px"}}  
                      />
                  </CardHeader>
                      <div className="flex px-3">
                          <p className="text-md text-wrap text-base font-medium text-orange-300">Beyond Borders</p>          
                      </div>
                  
                  <CardBody className='flex text-wrap items-center text-sm tracking-wider px-1'>
                      <p className="text-sm text-center text-slate-300">We provide both, flexible full-time and part-time jobs</p>
                  </CardBody>               
            </Card>
            
          <Card className="max-w-[300px] p-4 flex items-center justify-center" style={{ height: "fit-content", minHeight: "250px", background: "linear-gradient(135deg, hsla(219, 14%, 24%, 1) 27%, hsla(219, 50%, 8%, 1) 100%, hsla(217, 19%, 27%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)" }}>             
                
                  <CardHeader className="flex items-center justify-center gap-3">
                      <Image
                      alt="logo"
                      height={40}
                      radius="sm"
                      src="/Images/hire4.png"
                        width={40}
                      style={{boxShadow: "rgba(128, 128, 128, 0.2) 0px 2px 8px 0px"}}  
                      />
                  </CardHeader>
                      <div className="flex px-3">
                          <p className="text-md text-wrap text-base font-medium text-orange-300">Efficiency Redefined</p>          
                      </div>
                  
                  <CardBody className='flex text-wrap items-center text-sm tracking-wider px-1'>
                      <p className="text-sm text-center text-slate-300">The platform enables fast hiring without waiting. We offer affordable alternatives to traditional recruitment methods and provides quality talent.</p>
                  </CardBody>               
            </Card>
            
          <Card className="max-w-[300px] p-4 flex items-center justify-center" style={{ height: "fit-content", minHeight: "250px", background: "linear-gradient(135deg, hsla(219, 14%, 24%, 1) 27%, hsla(219, 50%, 8%, 1) 100%, hsla(217, 19%, 27%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)" }}>             
                
                  <CardHeader className="flex items-center justify-center gap-3">
                      <Image
                      alt="logo"
                      height={40}
                      radius="sm"
                      src="/Images/hire5.png"
                        width={40}
                      style={{boxShadow: "rgba(128, 128, 128, 0.2) 0px 2px 8px 0px"}}  
                      />
                  </CardHeader>
                      <div className="flex px-3">
                          <p className="text-md text-wrap text-base font-medium text-orange-300">Simplified Contracts Satisfied Partnerships</p>          
                      </div>
                  
                  <CardBody className='flex text-wrap items-center text-sm tracking-wider px-1'>
                      <p className="text-sm text-center text-slate-300">The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.</p>
                  </CardBody>               
            </Card>       

            
          <Card className="max-w-[300px] p-4 flex items-center justify-center" style={{ height: "fit-content", minHeight: "250px", background: "linear-gradient(135deg, hsla(219, 14%, 24%, 1) 27%, hsla(219, 50%, 8%, 1) 100%, hsla(217, 19%, 27%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)" }}>             
                
                  <CardHeader className="flex items-center justify-center gap-3">
                      <Image
                      alt="logo"
                      height={40}
                      radius="sm"
                      src="/Images/hire6.png"
                        width={40}
                      style={{boxShadow: "rgba(128, 128, 128, 0.2) 0px 2px 8px 0px"}}  
                      />
                  </CardHeader>
                      <div className="flex px-3">
                          <p className="text-md text-wrap text-base font-medium text-orange-300">Unleashing Top Talent Globally</p>          
                      </div>
                  
                  <CardBody className='flex text-wrap items-center text-sm tracking-wider px-1'>
                      <p className="text-sm text-center text-slate-300">We offer 5% top talents and supports companies hiring from various time zones.</p>
                  </CardBody>               
          </Card>
      </div>
  )
}

export default TalentCard

import React from 'react'


const perks = [
  {
    name: 'Customized SEO Services',  
       description: 'We develop tailored SEO plans for new websites as they consider a correct SEO website checklist, as well as strategy, to be critical for business.',
  },
  {
    name: 'On-Page SEO Services',   
    description: 'We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes.',
  },
  {
    name: 'Off-Page SEO Services',   
    description: 
      "We stress upon the mobile optimizations since the mobile phone use by search is highly prevalent. They are more able to score the best SEO rankings and can easily be viewed on mobile devices.."
  },
  {
    name: 'Mobile SEO Servicess',    
    description: 
      "We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel."
  },
  {
    name: 'Free Website Audit and Strategies',    
    description: 
      "We go beyond essential SEO website development to give out free website audits, analysis and SEO strategies for transparent business strategies. They target business owners in different industries, and these packages include local SEO and e-commerce services."
  },
]

const SeoServices = () => {
  return (
    <div className='flex flex-col mt-9 md:mx-10 rounded-3xl' style={{background: "linear-gradient(45deg, hsla(216, 4%, 44%, 1) 0%, hsla(221, 38%, 30%, 1) 44%, hsla(219, 50%, 8%, 1) 100%, hsla(217, 19%, 27%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)"}}>
          
        <div className='flex justify-center mt-5'>          
            <h2 className='font-semibold text-2xl mt-5 md:mt-0' style={{color: "#E68F50"}}>SEO Services</h2>        
          
          </div>
          
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-4 m-8">
  {
    perks.map((perk) => (
      <div key={perk.name} className="md:flex md:items-start md:text-left lg:text-center gap-2 text-wrap">
        <div className="flex items-center justify-center md:block">                    
          <svg width="22" height="22" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.5 34.375C19.7161 34.375 21.9104 33.9385 23.9578 33.0905C26.0052 32.2424 27.8654 30.9994 29.4324 29.4324C30.9994 27.8654 32.2424 26.0052 33.0905 23.9578C33.9385 21.9104 34.375 19.7161 34.375 17.5C34.375 15.2839 33.9385 13.0896 33.0905 11.0422C32.2424 8.99485 30.9994 7.13456 29.4324 5.56757C27.8654 4.00058 26.0052 2.75758 23.9578 1.90953C21.9104 1.06148 19.7161 0.625 17.5 0.625C13.0245 0.625 8.73225 2.4029 5.56757 5.56757C2.4029 8.73225 0.625 13.0245 0.625 17.5C0.625 21.9755 2.4029 26.2677 5.56757 29.4324C8.73225 32.5971 13.0245 34.375 17.5 34.375ZM17.065 24.325L26.44 13.075L23.56 10.675L15.4975 20.3481L11.3256 16.1744L8.67438 18.8256L14.2994 24.4506L15.7506 25.9019L17.065 24.325Z" fill="#54B435"/>
          </svg>                    
        </div>   

        <div className="flex flex-col text-center gap-1 md:text-start justify-center">
          <h3 className="text-yellow-400 text-lg font-semibold" >
            {perk.name}
          </h3>
          <p className="mt-3 text-gray-200 text-sm">
            {perk.description}
          </p>
        </div>
      </div>
    ))
  }
</div>
               
 </div>
    
  )
}

export default SeoServices
                  
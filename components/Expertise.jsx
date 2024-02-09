import { Button } from '@nextui-org/react'
import React from 'react'

const Expertise = () => {
  // Array of expertise
  const expertiseList = [
    "Website Development",
    "App Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimisation"
  ];

  return (
    <div className='flex flex-col text-wrap gap-y-3 mx-1 mt-8'>
      <h2 className="text-center">In the realm of digital solutions, we offer expertise in</h2>
      <div className='flex flex-wrap justify-center gap-3'>
        {/* Mapping over the array to generate dynamic buttons */}
        {expertiseList.map((expertise, index) => (
            <Button key={index} radius="full" color="primary" variant="bordered" className="text-[#87CEEB] hover:bg-blue-500 hover:text-white" style={{boxShadow: "rgba(255, 255, 255, 0.25) 0px 10px 10px, rgba(255, 255, 255, 0.12) 0px 0px 2px, rgba(255, 255, 255, 0.12) 0px 1px 3px, rgba(255, 255, 255, 0.17) 0px 6px 7px, rgba(255, 255, 255, 0.09) 0px -3px 5px"}}>
            {expertise}
          </Button>
        ))}
        </div>
          
        <h2 className="text-center">showcasing our proficiency across various facets of the digital platform </h2> 
    </div>
  );
}

export default Expertise;



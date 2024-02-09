import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Link, Image} from "@nextui-org/react";

const DigiCards = () => {
    return (      
        <div className='flex justify-center items-center md:gap-5 gap-2 mx-10 flex-wrap p-3'>
            <Card className="max-w-[300px] p-4 rgbborder" style={{background: "linear-gradient(135deg, hsla(219, 14%, 24%, 1) 27%, hsla(219, 50%, 8%, 1) 100%, hsla(217, 19%, 27%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)"}}>
                <CardHeader className="flex gap-3">
                    <Image
                    alt="logo"
                    height={40}
                    radius="sm"
                    src="/Images/digital1.png"
                     width={40}
                    style={{boxShadow: "rgba(128, 128, 128, 0.2) 0px 2px 8px 0px"}}  
                    />
                    <div className="flex px-3">
                    <p className="text-md text-wrap text-base font-medium text-orange-300">Website Development</p>          
                    </div>
                </CardHeader>
                
                <CardBody className='flex text-wrap items-center text-sm tracking-wider px-1'>
                    <p className="text-sm text-center text-slate-300">We specialize in responsive website development, ensuring optimal performance across various devices..</p>
                </CardBody>
                
                <CardFooter>
                    <Link
                    isExternal          
                    href="https://github.com/"
                    >
                    <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16675 25.0001C4.16675 13.4938 13.4938 4.16675 25.0001 4.16675C36.5063 4.16675 45.8334 13.4938 45.8334 25.0001C45.8334 36.5063 36.5063 45.8334 25.0001 45.8334C13.4938 45.8334 4.16675 36.5063 4.16675 25.0001ZM21.4438 29.7772C21.2449 29.9693 21.0861 30.1992 20.977 30.4534C20.8678 30.7076 20.8103 30.981 20.8079 31.2576C20.8055 31.5342 20.8582 31.8085 20.963 32.0646C21.0677 32.3206 21.2224 32.5532 21.418 32.7488C21.6136 32.9444 21.8462 33.0991 22.1023 33.2039C22.3583 33.3086 22.6326 33.3613 22.9093 33.3589C23.1859 33.3565 23.4592 33.2991 23.7134 33.1899C23.9676 33.0807 24.1975 32.922 24.3897 32.723L30.6397 26.473C31.0302 26.0823 31.2496 25.5525 31.2496 25.0001C31.2496 24.4477 31.0302 23.9178 30.6397 23.5272L24.3897 17.2772C24.1975 17.0782 23.9676 16.9195 23.7134 16.8103C23.4592 16.7011 23.1859 16.6436 22.9093 16.6412C22.6326 16.6388 22.3583 16.6915 22.1023 16.7963C21.8462 16.901 21.6136 17.0557 21.418 17.2513C21.2224 17.447 21.0677 17.6796 20.963 17.9356C20.8582 18.1916 20.8055 18.466 20.8079 18.7426C20.8103 19.0192 20.8678 19.2926 20.977 19.5468C21.0861 19.8009 21.2449 20.0308 21.4438 20.223L26.2209 25.0001L21.4438 29.7772Z" fill="#E68F50"/>
                    </svg>

                    </Link>
                </CardFooter>
            </Card>

            <Card className="max-w-[300px] p-4 rgbborder" style={{background: "linear-gradient(135deg, hsla(219, 14%, 24%, 1) 27%, hsla(219, 50%, 8%, 1) 100%, hsla(217, 19%, 27%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)"}}>
                <CardHeader className="flex gap-3">
                    <Image
                    alt="logo"
                    height={40}
                    radius="sm"
                    src="/Images/digital2.png"
                            width={40}
                    style={{boxShadow: "rgba(128, 128, 128, 0.2) 0px 2px 8px 0px"}}  
                    />
                    <div className="flex px-3">
                    <p className="text-md text-wrap text-base font-medium text-orange-300">App Development</p>          
                    </div>
                </CardHeader>
                
                <CardBody className='flex text-wrap items-center text-sm tracking-wider px-1'>
                    <p className="text-sm text-center text-slate-300">We specialize in responsive website development, ensuring optimal performance across various devices..</p>
                </CardBody>
                
                <CardFooter>
                    <Link
                    isExternal          
                    href="https://github.com/"
                    >
                    <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16675 25.0001C4.16675 13.4938 13.4938 4.16675 25.0001 4.16675C36.5063 4.16675 45.8334 13.4938 45.8334 25.0001C45.8334 36.5063 36.5063 45.8334 25.0001 45.8334C13.4938 45.8334 4.16675 36.5063 4.16675 25.0001ZM21.4438 29.7772C21.2449 29.9693 21.0861 30.1992 20.977 30.4534C20.8678 30.7076 20.8103 30.981 20.8079 31.2576C20.8055 31.5342 20.8582 31.8085 20.963 32.0646C21.0677 32.3206 21.2224 32.5532 21.418 32.7488C21.6136 32.9444 21.8462 33.0991 22.1023 33.2039C22.3583 33.3086 22.6326 33.3613 22.9093 33.3589C23.1859 33.3565 23.4592 33.2991 23.7134 33.1899C23.9676 33.0807 24.1975 32.922 24.3897 32.723L30.6397 26.473C31.0302 26.0823 31.2496 25.5525 31.2496 25.0001C31.2496 24.4477 31.0302 23.9178 30.6397 23.5272L24.3897 17.2772C24.1975 17.0782 23.9676 16.9195 23.7134 16.8103C23.4592 16.7011 23.1859 16.6436 22.9093 16.6412C22.6326 16.6388 22.3583 16.6915 22.1023 16.7963C21.8462 16.901 21.6136 17.0557 21.418 17.2513C21.2224 17.447 21.0677 17.6796 20.963 17.9356C20.8582 18.1916 20.8055 18.466 20.8079 18.7426C20.8103 19.0192 20.8678 19.2926 20.977 19.5468C21.0861 19.8009 21.2449 20.0308 21.4438 20.223L26.2209 25.0001L21.4438 29.7772Z" fill="#E68F50"/>
                    </svg>

                    </Link>
                </CardFooter>
            </Card>

            <Card className="max-w-[300px] p-4 rgbborder" style={{background: "linear-gradient(135deg, hsla(219, 14%, 24%, 1) 27%, hsla(219, 50%, 8%, 1) 100%, hsla(217, 19%, 27%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)"}}>
                <CardHeader className="flex gap-3">
                    <Image
                    alt="logo"
                    height={40}
                    radius="sm"
                    src="/Images/digital3.png"
                            width={40}
                    style={{boxShadow: "rgba(128, 128, 128, 0.2) 0px 2px 8px 0px"}}  
                    />
                    <div className="flex px-3">
                    <p className="text-md text-wrap text-base font-medium text-orange-300">Software Development</p>          
                    </div>
                </CardHeader>
                
                <CardBody className='flex text-wrap items-center text-sm tracking-wider px-1'>
                    <p className="text-sm text-center text-slate-300">We specialize in responsive website development, ensuring optimal performance across various devices..</p>
                </CardBody>
                
                <CardFooter>
                    <Link
                    isExternal          
                    href="https://github.com/"
                    >
                    <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16675 25.0001C4.16675 13.4938 13.4938 4.16675 25.0001 4.16675C36.5063 4.16675 45.8334 13.4938 45.8334 25.0001C45.8334 36.5063 36.5063 45.8334 25.0001 45.8334C13.4938 45.8334 4.16675 36.5063 4.16675 25.0001ZM21.4438 29.7772C21.2449 29.9693 21.0861 30.1992 20.977 30.4534C20.8678 30.7076 20.8103 30.981 20.8079 31.2576C20.8055 31.5342 20.8582 31.8085 20.963 32.0646C21.0677 32.3206 21.2224 32.5532 21.418 32.7488C21.6136 32.9444 21.8462 33.0991 22.1023 33.2039C22.3583 33.3086 22.6326 33.3613 22.9093 33.3589C23.1859 33.3565 23.4592 33.2991 23.7134 33.1899C23.9676 33.0807 24.1975 32.922 24.3897 32.723L30.6397 26.473C31.0302 26.0823 31.2496 25.5525 31.2496 25.0001C31.2496 24.4477 31.0302 23.9178 30.6397 23.5272L24.3897 17.2772C24.1975 17.0782 23.9676 16.9195 23.7134 16.8103C23.4592 16.7011 23.1859 16.6436 22.9093 16.6412C22.6326 16.6388 22.3583 16.6915 22.1023 16.7963C21.8462 16.901 21.6136 17.0557 21.418 17.2513C21.2224 17.447 21.0677 17.6796 20.963 17.9356C20.8582 18.1916 20.8055 18.466 20.8079 18.7426C20.8103 19.0192 20.8678 19.2926 20.977 19.5468C21.0861 19.8009 21.2449 20.0308 21.4438 20.223L26.2209 25.0001L21.4438 29.7772Z" fill="#E68F50"/>
                    </svg>

                    </Link>
                </CardFooter>
            </Card>

            <Card className="max-w-[300px] p-4 rgbborder" style={{background: "linear-gradient(135deg, hsla(219, 14%, 24%, 1) 27%, hsla(219, 50%, 8%, 1) 100%, hsla(217, 19%, 27%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)"}}>
                <CardHeader className="flex gap-3">
                    <Image
                    alt="logo"
                    height={40}
                    radius="sm"
                    src="/Images/digital4.png"
                            width={40}
                    style={{boxShadow: "rgba(128, 128, 128, 0.2) 0px 2px 8px 0px"}}  
                    />
                    <div className="flex px-3">
                    <p className="text-md text-wrap text-base font-medium text-orange-300">UI/UX Design</p>          
                    </div>
                </CardHeader>
                
                <CardBody className='flex text-wrap items-center text-sm tracking-wider px-1'>
                    <p className="text-sm text-center text-slate-300">We specialize in responsive website development, ensuring optimal performance across various devices..</p>
                </CardBody>
                
                <CardFooter>
                    <Link
                    isExternal          
                    href="https://github.com/"
                    >
                    <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16675 25.0001C4.16675 13.4938 13.4938 4.16675 25.0001 4.16675C36.5063 4.16675 45.8334 13.4938 45.8334 25.0001C45.8334 36.5063 36.5063 45.8334 25.0001 45.8334C13.4938 45.8334 4.16675 36.5063 4.16675 25.0001ZM21.4438 29.7772C21.2449 29.9693 21.0861 30.1992 20.977 30.4534C20.8678 30.7076 20.8103 30.981 20.8079 31.2576C20.8055 31.5342 20.8582 31.8085 20.963 32.0646C21.0677 32.3206 21.2224 32.5532 21.418 32.7488C21.6136 32.9444 21.8462 33.0991 22.1023 33.2039C22.3583 33.3086 22.6326 33.3613 22.9093 33.3589C23.1859 33.3565 23.4592 33.2991 23.7134 33.1899C23.9676 33.0807 24.1975 32.922 24.3897 32.723L30.6397 26.473C31.0302 26.0823 31.2496 25.5525 31.2496 25.0001C31.2496 24.4477 31.0302 23.9178 30.6397 23.5272L24.3897 17.2772C24.1975 17.0782 23.9676 16.9195 23.7134 16.8103C23.4592 16.7011 23.1859 16.6436 22.9093 16.6412C22.6326 16.6388 22.3583 16.6915 22.1023 16.7963C21.8462 16.901 21.6136 17.0557 21.418 17.2513C21.2224 17.447 21.0677 17.6796 20.963 17.9356C20.8582 18.1916 20.8055 18.466 20.8079 18.7426C20.8103 19.0192 20.8678 19.2926 20.977 19.5468C21.0861 19.8009 21.2449 20.0308 21.4438 20.223L26.2209 25.0001L21.4438 29.7772Z" fill="#E68F50"/>
                    </svg>

                    </Link>
                </CardFooter>
            </Card>

            <Card className="max-w-[300px] p-4 rgbborder" style={{background: "linear-gradient(135deg, hsla(219, 14%, 24%, 1) 27%, hsla(219, 50%, 8%, 1) 100%, hsla(217, 19%, 27%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)"}}>
                <CardHeader className="flex gap-3">
                    <Image
                    alt="logo"
                    height={40}
                    radius="sm"
                    src="/Images/digital5.png"
                            width={40}
                    style={{boxShadow: "rgba(128, 128, 128, 0.2) 0px 2px 8px 0px"}}  
                    />
                    <div className="flex px-3">
                    <p className="text-md text-wrap text-base font-medium text-orange-300">Digital Marketing</p>          
                    </div>
                </CardHeader>
                
                <CardBody className='flex text-wrap items-center text-sm tracking-wider px-1'>
                    <p className="text-sm text-center text-slate-300">We specialize in responsive website development, ensuring optimal performance across various devices..</p>
                </CardBody>
                
                <CardFooter>
                    <Link
                    isExternal          
                    href="https://github.com/"
                    >
                    <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16675 25.0001C4.16675 13.4938 13.4938 4.16675 25.0001 4.16675C36.5063 4.16675 45.8334 13.4938 45.8334 25.0001C45.8334 36.5063 36.5063 45.8334 25.0001 45.8334C13.4938 45.8334 4.16675 36.5063 4.16675 25.0001ZM21.4438 29.7772C21.2449 29.9693 21.0861 30.1992 20.977 30.4534C20.8678 30.7076 20.8103 30.981 20.8079 31.2576C20.8055 31.5342 20.8582 31.8085 20.963 32.0646C21.0677 32.3206 21.2224 32.5532 21.418 32.7488C21.6136 32.9444 21.8462 33.0991 22.1023 33.2039C22.3583 33.3086 22.6326 33.3613 22.9093 33.3589C23.1859 33.3565 23.4592 33.2991 23.7134 33.1899C23.9676 33.0807 24.1975 32.922 24.3897 32.723L30.6397 26.473C31.0302 26.0823 31.2496 25.5525 31.2496 25.0001C31.2496 24.4477 31.0302 23.9178 30.6397 23.5272L24.3897 17.2772C24.1975 17.0782 23.9676 16.9195 23.7134 16.8103C23.4592 16.7011 23.1859 16.6436 22.9093 16.6412C22.6326 16.6388 22.3583 16.6915 22.1023 16.7963C21.8462 16.901 21.6136 17.0557 21.418 17.2513C21.2224 17.447 21.0677 17.6796 20.963 17.9356C20.8582 18.1916 20.8055 18.466 20.8079 18.7426C20.8103 19.0192 20.8678 19.2926 20.977 19.5468C21.0861 19.8009 21.2449 20.0308 21.4438 20.223L26.2209 25.0001L21.4438 29.7772Z" fill="#E68F50"/>
                    </svg>

                    </Link>
                </CardFooter>
            </Card>

            <Card className="max-w-[300px] p-4 rgbborder" style={{background: "linear-gradient(135deg, hsla(219, 14%, 24%, 1) 27%, hsla(219, 50%, 8%, 1) 100%, hsla(217, 19%, 27%, 1) 100%, hsla(197, 44%, 42%, 1) 100%)"}}>
                <CardHeader className="flex gap-3">
                    <Image
                    alt="logo"
                    height={40}
                    radius="sm"
                    src="/Images/digital6.png"
                            width={40}
                    style={{boxShadow: "rgba(128, 128, 128, 0.2) 0px 2px 8px 0px"}}  
                    />
                    <div className="flex px-3">
                    <p className="text-md text-wrap text-base font-medium text-orange-300">SEO Optimization</p>          
                    </div>
                </CardHeader>
                
                <CardBody className='flex text-wrap items-center text-sm tracking-wider px-1'>
                    <p className="text-sm text-center text-slate-300">We specialize in responsive website development, ensuring optimal performance across various devices..</p>
                </CardBody>
                
                <CardFooter>
                    <Link
                    isExternal          
                    href="https://github.com/"
                    >
                    <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16675 25.0001C4.16675 13.4938 13.4938 4.16675 25.0001 4.16675C36.5063 4.16675 45.8334 13.4938 45.8334 25.0001C45.8334 36.5063 36.5063 45.8334 25.0001 45.8334C13.4938 45.8334 4.16675 36.5063 4.16675 25.0001ZM21.4438 29.7772C21.2449 29.9693 21.0861 30.1992 20.977 30.4534C20.8678 30.7076 20.8103 30.981 20.8079 31.2576C20.8055 31.5342 20.8582 31.8085 20.963 32.0646C21.0677 32.3206 21.2224 32.5532 21.418 32.7488C21.6136 32.9444 21.8462 33.0991 22.1023 33.2039C22.3583 33.3086 22.6326 33.3613 22.9093 33.3589C23.1859 33.3565 23.4592 33.2991 23.7134 33.1899C23.9676 33.0807 24.1975 32.922 24.3897 32.723L30.6397 26.473C31.0302 26.0823 31.2496 25.5525 31.2496 25.0001C31.2496 24.4477 31.0302 23.9178 30.6397 23.5272L24.3897 17.2772C24.1975 17.0782 23.9676 16.9195 23.7134 16.8103C23.4592 16.7011 23.1859 16.6436 22.9093 16.6412C22.6326 16.6388 22.3583 16.6915 22.1023 16.7963C21.8462 16.901 21.6136 17.0557 21.418 17.2513C21.2224 17.447 21.0677 17.6796 20.963 17.9356C20.8582 18.1916 20.8055 18.466 20.8079 18.7426C20.8103 19.0192 20.8678 19.2926 20.977 19.5468C21.0861 19.8009 21.2449 20.0308 21.4438 20.223L26.2209 25.0001L21.4438 29.7772Z" fill="#E68F50"/>
                    </svg>

                    </Link>
                </CardFooter>
            </Card>
        </div>  
      
  )
}

export default DigiCards
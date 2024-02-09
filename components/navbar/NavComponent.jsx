"use client"

import {Tabs, Tab} from "@nextui-org/react";
import React, { useState } from "react";
import {  Navbar,   NavbarBrand, Link, Button, NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";import {AcmeLogo} from "./AcmeLogo.jsx";
import Toggle from "../toggle/Toggle.jsx";

const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Work",
    "Services",
    "System",
    "Clients",
    "Team",
    "Contact Us",    
    ];
    const radiusList = [    
    "full"
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="mt-2">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">STACKRO</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">                  
            {radiusList.map((radius) => (
            <Tabs key={radius} radius={radius} size={radius} aria-label="Tabs radius" className="p-10">
                <Tab key="Home" title="Home" />
                <Tab key="About Us" title="About Us"/>
                <Tab key="Works" title="Work"/>
                <Tab key="Services" title="Services"/>
                <Tab key="Clients" title="Clients"/>
                <Tab key="Teams" title="Teams"/>
                <Tab key="Contact Us" title="Contact Us"/>            
            </Tabs>
            ))}  
          </NavbarContent>    


            {/* <NavbarItem> */}
          {/* <Link color="foreground" href="#" className="hover:text-blue-600 font-semibold">
            Home
          </Link> */}
        {/* </NavbarItem> */}
        {/* <NavbarItem >
          <Link href="#" color="foreground" className="hover:text-blue-600 font-semibold">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-blue-600 font-semibold">
            Work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-blue-600 font-semibold">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-blue-600 font-semibold">
            Clients
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-blue-600 font-semibold">
            Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-blue-600 font-semibold">
            Contact Us
          </Link>
        </NavbarItem> */}
     
      <NavbarContent justify="end">
        <Toggle />
      </NavbarContent>
          

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"              
              className="w-full hover:text-blue-500"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default NavComponent
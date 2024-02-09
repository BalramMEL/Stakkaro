"use client"

import {Tabs, Tab} from "@nextui-org/react";
import React, { useState } from "react";
import {  Navbar,   NavbarBrand, Link, Button, NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";import {AcmeLogo} from "./AcmeLogo.jsx";
import Toggle from "../toggle/Toggle.jsx";
import { ThemeSwitcher } from "../ThemeSwitcher.jsx";

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
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo/>
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

    
      <NavbarContent justify="end">
        <ThemeSwitcher />
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
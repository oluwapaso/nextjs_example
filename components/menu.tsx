"use client"

import React, { useState } from 'react'
import SideBarList from './sidebar_list';
import { MenuProps } from '@/types/types';
import Link from 'next/link';

const Menu = () => {

  const Menus: MenuProps[] = [
    {
      title: "Leads",
      submenu: true,
      submenuItems: [{
        title: "Add New Lead",
        link: "/endpoints/leads/add-new-lead"
      }]
    },
    {
      title: "Quotes",
      submenu: true,
      submenuItems: [{
        title: "Add New Quote",
        link: "/endpoints/quotes/add-new-quote"
      },
      {
        title: "Update Quote Details",
        link: "/endpoints/quotes/update-quote-details"
      }]
    }
  ]

  return (
    <div className=" border-slate-300 col-span-1 border-b-2">
      <div className="bg-slate-100 p-4">
        <Link href="/">
          <img src="/star-wars-1-logo-png-transparent.png" alt="Logo goes here" className="max-w-[140px]" />
        </Link>
      </div>

      <div className="p-4">
        <h3 className="uppercase font-bold text-lg">Core Resources</h3>
      </div>

      <ul className="p-4 pt-0">
        {Menus.map((menu, index) => {
          return (
            <SideBarList key={index} menu={menu} />
          )
        })
        }

      </ul>
    </div>
  )
}

export default Menu
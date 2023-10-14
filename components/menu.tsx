"use client"

import React, { useState, memo } from 'react'
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
      submenuItems: [
        {
          title: "Quote Details",
          link: "/endpoints/quotes/get-quote-details"
        },
        {
          title: "Update Contact Info",
          link: "/endpoints/quotes/update-contact-info"
        },
        {
          title: "Update Transit Info",
          link: "/endpoints/quotes/update-transit-info"
        }]
    },
    {
      title: "Orders",
      submenu: true,
      submenuItems: [
        {
          title: "Book New Order",
          link: "/endpoints/orders/book-new-order"
        },
        {
          title: "Order Details",
          link: "/endpoints/orders/get-order-details"
        },
        {
          title: "Update Contact Info",
          link: "/endpoints/orders/update-contact-info"
        },
        {
          title: "Update Transit Info",
          link: "/endpoints/orders/update-transit-info"
        }]
    },
    {
      title: "Shipper",
      submenu: true,
      submenuItems: [{
        title: "Collect Signature",
        link: "/endpoints/shippers/collect-signature"
      }]
    },
    {
      title: "Payments",
      submenu: true,
      submenuItems: [
        {
          title: "Add New Payment",
          link: "/endpoints/payments/add-new-payment"
        },
        {
          title: "Log Payment Error",
          link: "/endpoints/payments/add-payment-error"
        },
        {
          title: "Load Payment History",
          link: "/endpoints/payments/load-payments"
        }]
    },
    {
      title: "Broker",
      submenu: true,
      submenuItems: [{
        title: "Get Broker Info",
        link: "/endpoints/broker/get-broker-info"
      }]
    },
  ]

  return (
    <div className=" border-slate-300 col-span-1 border-b-2">
      <div className="bg-slate-100 p-4">
        <Link href="/">
          <img src="/Hauling-Desk-Logo-Black.png" alt="Logo goes here" className="max-w-[250px]" />
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

export default memo(Menu)
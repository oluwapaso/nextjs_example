import { SideBarProps } from '@/types/types';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsArrowReturnRight, BsChevronDown } from "react-icons/bs";

const SideBarList = ({ menu }: SideBarProps) => {
    const [submenuOpen, setSubMenuOpen] = useState(false)
    return (
        <>
            <li className="flex items-center cursor-pointer select-none hover:bg-slate-100 p-3 font-semibold rounded-md"
                onClick={() => setSubMenuOpen(!submenuOpen)}>
                <span className="pr-2">
                    <BsArrowReturnRight />
                </span>
                <span className="flex-1">{menu.title}</span>

                {
                    menu.submenuItems && (
                        <BsChevronDown className="" />
                    )
                }
            </li>

            {menu.submenu && submenuOpen && (
                <ul>
                    {menu.submenuItems.map((submenuItem, index) => {
                        return (
                            <Link href={submenuItem.link} key={index} className="flex items-center cursor-pointer select-none 
                            hover:bg-slate-100 p-3 ml-5 font-normal text-md rounded-md">
                                {submenuItem.title}
                            </Link>
                        )
                    })}
                </ul>
            )}
        </>
    )
}

export default SideBarList
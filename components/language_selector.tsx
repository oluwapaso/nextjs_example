"use client"

import React, { useContext, useState } from 'react'
import { BsChevronDown } from "react-icons/bs";
import LanguangeSelectorItem from './lang_selector_item';
import { LanguageContext } from '@/app/contexts/context';

const LanguageSelector = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const LangContext = useContext(LanguageContext)

    const handleOptionCLicked = (lang: string) => {
        LangContext?.setOpenedLibrary(lang)
        setMenuOpen(false)
    }

    if (menuOpen) {
        var open_class = ""
    } else {
        var open_class = "opacity-0 invisible -translate-y-2 "
    }

    open_class += " dropdown-menu transition-all duration-300 transform origin-top-right scale-95"

    return (
        <div>
            <div className=" relative inline-block text-left dropdown z-10">
                <span className="rounded-md shadow-sm">
                    <button className="inline-flex justify-center items-center w-full px-2 py-1 text-sm font-medium transition 
                    duration-150 ease-in-out bg-slate-600 hover:text-gray-100" onClick={() => setMenuOpen(!menuOpen)}
                        onBlur={() => setMenuOpen(!menuOpen)}>
                        <span className="mr-2">{LangContext?.openedLibrary}</span>
                        <BsChevronDown />
                    </button>
                </span>
                <div className={open_class}>
                    <div className="absolute right-0 w-56 mt-1 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 shadow-lg outline-none">
                        <LanguangeSelectorItem language="CURL" handleClick={() => handleOptionCLicked("CURL")} />
                        <LanguangeSelectorItem language="PHP" handleClick={() => handleOptionCLicked("PHP")} />
                        <LanguangeSelectorItem language="Node.js" handleClick={() => handleOptionCLicked("Node.js")} />
                        <LanguangeSelectorItem language="Go" handleClick={() => handleOptionCLicked("Go")} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageSelector
"use client"

import React, { createContext, useState } from 'react'
import LanguageSelector from '../language_selector'

type LangContextType = {
    openedLibrary: string,
    setOpenedLibrary: React.Dispatch<React.SetStateAction<string>>,
}

export const LanguageContext = createContext<LangContextType | null>(null)
const AddNewLeads = () => {

    const [openedLibrary, setOpenedLibrary] = useState("CURL")

    const renderContent = () => {
        if (openedLibrary == "CURL") {
            return <div>This is CURL</div>
        } else if (openedLibrary == "PHP") {
            return <div>This is PHP</div>
        } else if (openedLibrary == "Node.js") {
            return <div>This is Node.js</div>
        } else if (openedLibrary == "Go") {
            return <div>This is Go</div>
        }
    }

    return (
        <LanguageContext.Provider value={{ openedLibrary, setOpenedLibrary }}>
            <div className="contents_area">
                <section>
                    <div>
                        <h2 className="font-bold text-xl font-poppings">Add New Lead</h2>
                    </div>
                    <div className="font-poppings mt-2">
                        To create a new lead, you create a <span className="higlight">lead object</span>
                    </div>

                    <div className="code-area">
                        <div className="code-area-header">
                            <span>Header Here</span>
                            <LanguageSelector />
                        </div>
                        <div className="code-area-body">
                            <div>Example 1 Body Here</div>
                            {renderContent()}
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <h2 className="font-bold text-xl font-poppings">Add New Without params</h2>
                    </div>
                    <div className="font-poppings mt-2">
                        To create a new lead, you create a <span className="higlight">lead object</span>
                    </div>

                    <div className="code-area">
                        <div className="code-area-header">
                            <span>Header Here</span>
                            <LanguageSelector />
                        </div>
                        <div className="code-area-body">
                            <div>Example 2 Body contents Here</div>
                            {renderContent()}
                        </div>
                    </div>
                </section>
            </div>
        </LanguageContext.Provider>
    )
}

export default AddNewLeads
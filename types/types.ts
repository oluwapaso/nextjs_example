 
 export type submenuProps = {
    title: string,
    link: string,
}

 export type MenuProps = {
    title: string, 
    submenu: boolean,
    submenuItems: submenuProps[]
}

export type SideBarProps = {
    menu: MenuProps
}

export type LangContextType = {
    openedLibrary: string,
    setOpenedLibrary: React.Dispatch<React.SetStateAction<string>>,
}
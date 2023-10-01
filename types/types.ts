 
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
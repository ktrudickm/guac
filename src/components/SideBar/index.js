import React from 'react'
import { 
    SidebarContainer, 
    CloseIcon, 
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
               <Icon onClick={toggle}>
                   <CloseIcon />
               </Icon>
               <SidebarWrapper>
                   <SidebarMenu>
                       <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                       <SidebarLink to='features' offset={-50} onClick={toggle}>Features</SidebarLink>
                       <SidebarLink to='token' onClick={toggle}>Token</SidebarLink>
                       <SidebarLink to='roadmap' offset={340} onClick={toggle}>Roadmap</SidebarLink>
                       <SidebarLink to='team' onClick={toggle}>Team</SidebarLink>
                   </SidebarMenu>
                   <SideBtnWrap>
                       <SidebarRoute to='/buy'>Buy GUAC</SidebarRoute>
                   </SideBtnWrap>
               </SidebarWrapper>
            </SidebarContainer> 
        </>
    )
}

export default Sidebar

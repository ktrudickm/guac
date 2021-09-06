import React from 'react';
import { FaBars } from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>GUAC</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} offset={-40} duration={1000}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='features' smooth={true} offset={-40} duration={1000}>Features</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='token' smooth={true} duration={1000}>Token</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='roadmap' smooth={true} offset={90} duration={1000}>Roadmap</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to='team'>Team</NavLinks>
                        </NavItem> */}
                        <NavBtn>
                            <NavBtnLink to='/buy'>Buy GUAC</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

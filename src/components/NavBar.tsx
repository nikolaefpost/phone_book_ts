import React, { ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import {Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import {ABOUT_ROUTE, CONTACTS_ROUTE, ERROR_ROUTE, HOME_ROUTE} from "../utils/consts";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";


function NavbarText(props: { children: ReactNode }) {
    return null;
}

const NavBar = () => {
    const contacts = useTypedSelector(state => state.contact)
    const history = useHistory();
    const {fetchContacts} = useActions()
    const loadContact = () => {
        fetchContacts()
    }
    if (contacts.loading) {
        return <h1>Loading in progress...</h1>
    }
    if (contacts.error) {
        return <h1>{contacts.error}</h1>
    }
    return (
        <div>
            <Navbar
                color="dark"
                container="xl"
                dark
                expand="md"
                fixed="top"
                light

            >
                <NavbarBrand onClick={()=>{
                                    history.push(HOME_ROUTE)
                                }}>
                    PHONE BOOK
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink
                                onClick={()=>{history.push(CONTACTS_ROUTE)}}
                            >
                                CONTACTS
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={loadContact}>
                                Load Contact
                            </NavLink>
                        </NavItem>

                    </Nav>
                    <NavbarText>
                        Simple Text
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
        // <div  >
        //     <Nav
        //         tabs
        //         color="dark"
        //         dark
        //     >
        //         <NavItem>
        //             <NavLink onClick={()=>{
        //                 history.push(HOME_ROUTE)
        //             }} >
        //                             HOME
        //             </NavLink>
        //         </NavItem>
        //
        //         <NavItem>
        //             <NavLink
        //                 onClick={()=>{
        //                     history.push(CONTACTS_ROUTE)
        //                 }}
        //             >
        //                 CONTACTS
        //             </NavLink>
        //         </NavItem>
        //         <NavItem>
        //             <NavLink
        //                 onClick={()=>{
        //                     history.push(ABOUT_ROUTE)
        //                 }}
        //                 >
        //                 ABOUT
        //             </NavLink>
        //         </NavItem>
        //         <NavItem>
        //             <NavLink
        //                 onClick={()=>{
        //                     history.push(ERROR_ROUTE)
        //                 }}
        //             >
        //                 ERROR
        //             </NavLink>
        //         </NavItem>
        //     </Nav>
        // </div>
    );
};

export default NavBar;
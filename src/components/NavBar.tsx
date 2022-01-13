import React from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import {ABOUT_ROUTE, CONTACTS_ROUTE, ERROR_ROUTE, HOME_ROUTE} from "../utils/consts";

const NavBar = () => {
    return (
        // <Navbar bg="dark" variant="dark" fixed="top">
        // <div>
        //     <Nav justified tabs pills>
        //         <NavItem>
        //             <NavLink
        //
        //                 href={HOME_ROUTE}
        //             >
        //                 HOME
        //             </NavLink>
        //         </NavItem>
        //         <NavItem>
        //             <NavLink href={CONTACTS_ROUTE}>
        //                 CONTACT
        //             </NavLink>
        //         </NavItem>
        //         <NavItem>
        //             <NavLink
        //                 href={ABOUT_ROUTE}
        //             >
        //                 ABOUT
        //             </NavLink>
        //         </NavItem>
        //         <NavItem>
        //             <NavLink
        //                 href={ERROR_ROUTE}
        //             >
        //                 ERROR
        //             </NavLink>
        //         </NavItem>
        //     </Nav>
        // </div>
        <div>
            <Nav tabs >
                <NavItem>
                    <NavLink href={HOME_ROUTE}>
                                    HOME
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href={CONTACTS_ROUTE}>
                        CONTACTS
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={ABOUT_ROUTE}>
                        ABOUT
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href={ERROR_ROUTE}
                    >
                        ERROR
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    );
};

export default NavBar;
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Spinner} from 'reactstrap';
import {ABOUT_EMPTY_ROUTE, CONTACTS_ROUTE, ERROR_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Error from "../pages/Error";
import {useDispatch} from "react-redux";
import {UserActionTypes} from "../types/userTypes";
import styles from "./components.module.css"


const NavBar: React.FC = () => {
    const [navbar, setNavbar] = useState(false)
    const {error, loading} = useTypedSelector(state => state.contact)
    const history = useHistory();

    const dispatch = useDispatch()
    const storeUser = useTypedSelector(state => state.user)
    console.log(storeUser)


    if (loading || storeUser.loading) {
        return (
            <Spinner color="secondary" size="">
                Loading...
            </Spinner>
        )
    }
    if (error || storeUser.error) {
        return <Error/>
    }
    return (
        <Navbar
            color="dark"
            container="xl"
            dark
            expand="md"
            fixed="top"
            light
        >
            <NavbarBrand onClick={() => {
                history.push(HOME_ROUTE)
            }}>
                PHONE BOOK
            </NavbarBrand>
            <NavbarToggler onClick={() => {
                setNavbar((pre) => !pre)
            }}/>
            <Collapse navbar isOpen={navbar}>
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem>
                        <NavLink
                            onClick={() => {
                                history.push(CONTACTS_ROUTE)
                            }}
                        >
                            CONTACTS
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => {
                            history.push(ABOUT_EMPTY_ROUTE)
                        }}>
                            ABOUT
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        {!storeUser.user ?
                            <NavLink onClick={() => {
                                history.push(LOGIN_ROUTE)
                            }}>
                                LOGIN
                            </NavLink>
                            :
                            <NavLink
                                onClick={()=>dispatch({type: UserActionTypes.DELETE_USER})}
                            >
                                EXIT
                            </NavLink>}
                    </NavItem>

                </Nav>
                <div>
                    <span className="text-light me-2">
                        {storeUser.user.displayName}
                    </span>

                        <img className={styles.user_logo}  src={storeUser.user.photoURL}/>

                </div>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;
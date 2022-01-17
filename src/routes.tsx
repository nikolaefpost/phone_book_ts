import {ABOUT_EMPTY_ROUTE, ABOUT_ROUTE, CONTACTS_ROUTE, ERROR_ROUTE, HOME_ROUTE} from "./utils/consts";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Error from "./pages/Error";
import AboutEmpty from "./pages/ABOUT_EMPTY";

export const routes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: ABOUT_ROUTE + '/:id',
        Component: About
    },
    {
        path: ERROR_ROUTE,
        Component: Error
    },
    {
        path: ABOUT_EMPTY_ROUTE,
        Component: AboutEmpty
    },
]

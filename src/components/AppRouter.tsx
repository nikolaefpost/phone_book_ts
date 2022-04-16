import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {routes, pablicRoutes} from '../routes';
import {HOME_ROUTE, LOGIN_ROUTE} from '../utils/consts';
import {useTypedSelector} from "../hooks/useTypedSelector";



const AppRouter: React.FC = () => {

    const storeUser = useTypedSelector(state => state.user)

    return storeUser.user? (
        <Switch>
            {routes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={HOME_ROUTE}/>
        </Switch>
    ):(
        <Switch>
            {pablicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={LOGIN_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;
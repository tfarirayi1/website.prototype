import React                from 'react';
import AccountHomePage      from 'page.account--home';
import AccountBillingPage   from 'page.account--billing';
import AccountProjectsPage  from 'page.account--projects';
import AccountDetailsPage   from 'page.account--details';
import BlankPage            from 'page.blank';
import RouteBroker          from 'broker.route';
import {Switch,Route}       from 'react-router-dom';

export default class AccountRouter extends React.Component{
    constructor(){
        super();
        // load procedures
        this.renderRoutes=RouteBroker.renderRoutes.bind(this);
        // set state
        this.state={};
        this.state.routes=[
            {
                component:AccountHomePage,
                endpoint:'/account',
                exact:true,
            },
            {
                endpoint:'/account/billing',
                component:AccountBillingPage,
                exact:true,
            },
            {
                endpoint:'/account/projects',
                component:AccountProjectsPage,
                exact:true,
            },
            {
                endpoint:'/account/details',
                component:AccountDetailsPage,
                exact:true,
            },
        ];
    }

    render(){
        return(
            <Switch>
                {
                    this.renderRoutes()
                }
                <Route component={BlankPage}/>
            </Switch>
        );
    }
}
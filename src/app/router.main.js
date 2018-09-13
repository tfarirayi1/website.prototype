import React            from 'react';
import IndexPage        from 'page.index';
import GlossaryPage     from 'page.glossary';
import RegisterPage     from 'page.register';
import BlankPage        from 'page.blank';
import LoginRouter      from 'router.login';
import AccountRouter    from 'router.account';
import RouteBroker      from 'broker.route';
import {Switch,Route}   from 'react-router-dom';

export default class MainRouter extends React.Component{
    constructor(){
        super();
        // load procedures
        this.renderRoutes=RouteBroker.renderRoutes.bind(this);
        // set state
        this.state={};
        this.state.routes=[
            {
                endpoint:'/',
                component:IndexPage,
                exact:true,
            },
            {
                endpoint:'/login',
                component:LoginRouter,
                exact:false,
            },
            {
                endpoint:'/account',
                component:AccountRouter,
                exact:false,
            },
            {
                endpoint:'/register',
                component:RegisterPage,
                exact:true,
            },
            {
                endpoint:'/glossary',
                component:GlossaryPage,
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
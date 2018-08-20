import React        from 'react';
import FormBroker   from 'broker.form';
import LoginBroker  from 'broker.login';
import {Redirect}   from 'react-router-dom';

export default class LoginPage extends React.Component{
    constructor(){
        super();
        // load procedures
        this._handleInputChange=FormBroker.handleInputChange.bind(this);
        this._traverserForm=FormBroker.traverseForm.bind(this);
        this._login=LoginBroker.signIn.bind(this);
        this._changePassword=LoginBroker.changePassword.bind(this);
        // set state
        this.form=React.createRef();
        this.formSubmitButton=React.createRef();
        this.state={};
        this.state.emailInput='';
        this.state.passwordInput='';
    }

    render(){
        const Content=()=>{
            if(this.props.userId===''){
                return(
                    <div ref={this.form}>
                        <div>
                            <label htmlFor="emailInput">
                                email
                            </label>
                            <input id="emailInput" type="email" autoComplete="off" value={this.state.emailInput}
                                onChange={this._handleInputChange} onKeyDown={this._traverserForm}/>
                        </div>
                        <div>
                            <label htmlFor="passwordInput">
                                password
                            </label>
                            <input id="passwordInput" type="password" value={this.state.passwordInput}
                                onChange={this._handleInputChange} onKeyDown={this._traverserForm}/>
                        </div>
                        <div>
                            <div ref={this.formSubmitButton} tabIndex="0" onClick={this._login}>
                                    submit
                            </div>
                        </div>
                        <div>
                            <div tabIndex="0" onClick={this._changePassword}>
                                    change password
                            </div>
                        </div>
                    </div>
                );
            }else{
                return(
                    <Redirect to='/account'/>
                );
            }
        };
        return(
            <div className="login">
                <div>
                    login
                </div>
                <Content/>
            </div>
        );
    }
}
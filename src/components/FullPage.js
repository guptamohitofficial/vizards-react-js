import React, { Component } from 'react'
import PublicHeader from './PublicHeader';
import PublicFooter from './PublicFooter';
import PublicBody from './PublicBody';
import { cookies } from '../cc/code.js';
import CheckToken from './CheckToken';
import HomeLoader from './Loaders';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import Blog from './Blog';
import { Route } from 'react-router-dom';
//import { apiRequest } from '../cc/code.js';
import Home from './Home';

export default class FullPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {isLogin:false,data:false};
    }

    render() {
        
        var showComponent;

        if(this.state.data!==false){
            showComponent = <Home 
                data={this.state.data}
            />
        }else if(this.state.isLogin && !this.state.data){
        
            showComponent = <HomeLoader/>

            console.log('going to get data');
            
                    
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${cookies.get('token')}`,
                },
            };

            fetch("http://localhost:8000/card", requestOptions)
                .then(response => response.json())
                .then(response => this.setState({ data: response }));
            
        }else if(cookies.get('token') && !this.state.isLogin) {
        
            showComponent = <CheckToken/>;
        
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                   token : cookies.get('token'),
                }),
            }
          
            fetch('http://localhost:8000/validate/token', requestOptions)
            .then(response => response.json())
            .then(response => {
                if(response['detail']){
                    this.setState({isLogin : true});
                }else{
                    cookies.remove('token');
                    window.alert('Invalid Attempt Please Relogin');
                }
            });
        
        }else{
        
            showComponent = false
        
        }

        return (
            <div>
                { showComponent !== false ?(
                    <div>
                        {showComponent}
                    </div>
                    ):(
                        <div>
                            <PublicHeader/>
                            <Route exact={true} path="/" component={PublicBody}/>
                            <Route exact={true} path="/blog" component={Blog}/>
                            <Route exact={true} path="/login" component={Login}/>
                            <Route exact={true} path="/signup" component={Signup}/>
                            <Route exact={true} path="/contact" component={Contact}/>
                            <PublicFooter/>
                        </div>
                    )
                }
            </div>
        )
    }
}

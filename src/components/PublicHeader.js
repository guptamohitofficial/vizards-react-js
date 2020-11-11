import React from 'react';
import { Link } from 'react-router-dom';
//import { Link, Switch, Route } from 'react-router-dom';
//import Contact from './Contact';
//import axios from 'axios';

const PublicHeader = () => {

/*
        const response = fetch("http://localhost:8000/card",
            {
                method: 'GET',
                /*body: JSON.stringify({
                    username:'mohit',
                    password:'hello' 
                    
                }),*
                headers: {
                    'Authorization': 'Token 69b24dbed2c0eb72d636c7216ecf89aba883b012'
                    // Other possible headers
                }
            }
        ).then(response => response.json());
        
        console.log(response);
*/
        
    return (
    <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close mt-3">
                    <span className="icon-close2 js-menu-toggle"></span>
                </div>
            </div>
            <div className="site-mobile-menu-body"></div>
        </div>


        <header className="site-navbar js-sticky-header site-navbar-target fixed-top">

            <div className="container">
                <div className="row align-items-center">

                    <div className="col-6 col-xl-2">
                        <div className="mb-0 site-logo">
                            <a href="/" style={{fontSize:"1.3em"}} className="mb-0">vizards<span className="text-primary">.</span></a>
                            
                        </div>
                                   
                    </div>

                    <div className="col-12 col-md-10 d-none d-xl-block">
                        <nav className="site-navigation position-relative text-right" role="navigation">

                            <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">

                                    <li><Link to="/" className="nav-link"><b>Home</b></Link></li>
                                            
                                    <li><Link to="/login" className="nav-link"><b>Login</b></Link></li>

                                    <li><Link to="/signup" className="nav-link"><b>Signup</b></Link></li>
                                            
                                    <li><Link to="/blog" className="nav-link"><b>Blog</b></Link></li>
                                    
                                    {/*<li className="has-children">

                                    {
                                        window.location.pathname !== '/'
                                        ?(
                                            <Link to="/" className="nav-link"><b>Home</b></Link>
                                        ):(
                                            <Link to="/login" className="nav-link"><b>Login</b></Link>
                                        )
                                    }

                                        <Link to="#features-section" className="nav-link"><b>Features</b></Link>
                                        
                                        <ul className="dropdown">
                                        
                                            <li><Link to="#" className="nav-link"><b>A</b></Link></li>
                                            <li><Link to="#" className="nav-link"><b>B</b></Link></li>
                                        
                                            <li className="has-children">
                                        
                                                <Link to="#">More Links</Link>
                                        
                                                <ul className="dropdown">
                                                    <li><Link to="#"><b>Menu One</b></Link></li>
                                                    <li><Link to="#"><b>Menu Two</b></Link></li>
                                                    <li><Link to="#"><b>Menu Three</b></Link></li>
                                                </ul>
                                        
                                            </li>
                                        </ul>

                                </li>*/}
                                    <li><Link exact="true" to="/contact" className="nav-link"><b>Contact</b></Link></li>
  
                                    
                                

                            </ul>
                        </nav>
                    </div>
                    

                    <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{position: 'relative', top: '3px'}}>
                        <a href="/" className="site-menu-toggle js-menu-toggle float-right">
                            <span className="icon-menu h3 text-black"></span>
                        </a>
                    </div>

                </div>
            </div>

        </header>
    </div>

  );
}

export default PublicHeader;
  /*
        //axios.defaults.headers.common['Authorization'] = 'Token 69b24dbed2c0eb72d636c7216ecf89aba883b012';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';
        axios.defaults.headers.common['Access-Control-Max-Age'] = '18000';
        axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'X-Requested-With, content-type';
        
        let data = {
            'username':'mohit',
            'password':'hello'
        }

        axios.post('http://localhost:8000/request/token', data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })*


        componentDidMount() {
            // Simple POST request with a JSON body using fetch
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    username:'mohit',
                    password:'hello' 
                }),
            };
            const datas = fetch('http://localhost:8000/request/token', requestOptions)
                .then(response => response.json())
                .then(console.log(response));
        }*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {menu: ''};
  }
  
  render() {
    var menu;
    
    return (
      <div>
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
                                  <div className="mb-0 site-logo"><a href="/" className="mb-0">vizards<span className="text-primary">.</span> </a></div>
                              </div>

                              <div className="col-12 col-md-10 d-none d-xl-block">
                                  <nav className="site-navigation position-relative text-right" role="navigation">

                                      <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                          <li><Link to="/" className="nav-link">Mohit Gupta</Link></li>
                                          <li><Link to="/logout" className="nav-link">logout</Link></li>

                                      </ul>
                                  </nav>
                              </div>


                              <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{position: 'relative', top: '3px'}}>
                                <Link to="#" className="site-menu-toggle js-menu-toggle float-right">
                                  <span className="icon-menu h3 text-black"></span>
                                </Link>
                              </div>

                          </div>
                      </div>

                  </header>
                </div>

                <div className="container py-4">
                    <div className="p-5"></div>
                    <div className="row">

                        <div className="col-md-3 col-6 mb-4">
                            <Link to="/savenew" style={{borderColor: '#fd7e14'}} className="shadow btn">
                                <b>Add new</b>
                            </Link>
                        </div>
                        <div className="col-md-3 col-6 mb-4">
                            <Link to="/create" style={{borderColor: '#fd7e14'}} className="shadow btn">
                                <b>Create</b>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-3 p-4 position-static">

                            <div className="d-flex feature-v1 cpointer">
                                <span className="wrap-icon icon-layers"></span>
                                <div className="my-auto">
                                    <h3>Scheduled</h3>
                                </div>
                            </div>

                            <div className="d-flex feature-v1 cpointer">
                                <span className="wrap-icon icon-layers"></span>
                                <div className="my-auto">
                                    <h3>Shared to</h3>
                                </div>
                            </div>

                            <div className="d-flex feature-v1 cpointer">
                                <span className="wrap-icon icon-layers"></span>
                                <div className="my-auto">
                                    <h3>Holder</h3>
                                </div>
                            </div>

                            <div className="d-flex feature-v1 cpointer">
                                <span className="wrap-icon icon-layers"></span>
                                <div className="my-auto">
                                    <h3>History</h3>
                                </div>
                            </div>

                        </div>
                        
                        <div className="col-md-9 p-4" id="state_detail_view">
                            {
                                this.state.menu?(
                                    {menu}
                                ):(
                                <div className="mb-4" style={{margin: '0 auto'}}>
                                    <img src="/static/images/cards_1.svg" alt="Card svg example" className="col-md-10"/>
                                </div>
    

                                )
                            }
  
                        </div>
                    
                    </div>
                </div>
      </div>
    )
  }
}


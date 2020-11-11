import React from 'react';
//import { Link } from 'react-router-dom';



class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    signupDone = () => {
        console.log('data is sent');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const fdata = event.target;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                first_name : fdata.getElementsByClassName('sform')[0].value,
                last_name : fdata.getElementsByClassName('sform')[1].value,
                email : fdata.getElementsByClassName('sform')[2].value, 
                username : fdata.getElementsByClassName('sform')[2].value, 
                password : fdata.getElementsByClassName('sform')[3].value,
                //password2 : fdata.getElementsByClassName('sform ')[4].value, 
            }),
        };
        /*if (fdata.getElementsByClassName('sform ')[3].value === fdata.getElementsByClassName('sform ')[4].value){
            console.log('same');
        }else{
            console.log('not same');
        }
        console.log(requestOptions);*/

        const data = fetch('http://localhost:8000/user-auth/signup', requestOptions);
        
        data.then(response => response.json()).then(this.signupDone());
    }
    

    render() {
        
        return (
                    
            <div className="col-lg-4 col-md-6 m-auto pt-5 mb-4">
                <div className=" p-5 rounded">

                    <form onSubmit={this.handleSubmit} className="p-5 bg-light">

                        <h2 className="h4 text-black mb-5">SignUp</h2>

                        <div className="row form-group">
                            <div className="col-md-6">
                                <input type="text" placeholder="First Name" id="fname" required className="sform form-control"/>
                            </div>
                            <div className="col-md-6">
                                <input type="text" placeholder="Last Name" id="lname" required className="sform form-control"/>
                            </div>
                        </div>

                        {/*<div className="form-group">

                            <div className="col-md-12 px-0">
                                <input type="text" placeholder="Username" name="username" className="form-control"/>
                            </div>
                        </div>*/}

                        <div className="form-group">

                            <div className="col-md-12 px-0">
                                <input type="email" placeholder="Email" id="email" required className="sform form-control"/>
                            </div>
                        </div>

                        <div className="form-group">

                            <div className="col-md-12 px-0">
                                <input type="password" placeholder="Password" id="password1" required className="sform form-control"/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-md-12 text-center">
                                <input type="submit" value="Create Profile" className="btn btn-primary btn-md text-white"/>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
        
    }
}


export default Signup;

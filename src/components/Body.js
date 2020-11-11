import React from 'react';

export default class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {menu: ''};
    }
    

    render() {
        
        return (
            <div>
                
            </div>
        );

    }
}




/*
    componentDidMount() {
        
        
        function res(data){
            console.log(data.detail)
            return data.detail;
        }

        function authUser(token){
            if (token) {
                const response = fetch('http://localhost:8000/validate/token', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        token: token,
                    }),
                });
                response
                .then( (response) => response.json())
                .then( (response) => res(response) );
        
            }else {
                return false;
            }
        }

        var token = "4f12f45301332e4a990e4fd127f12b07bc28aebf";        
        
        const isLoggedin = authUser(token);
        
                        {   
                            isLoggedin ? (
                                <Route exact={true} path="/" component={Home}/>
                            )   :   (
                                <Route exact={true} path="/" component={LandingBody}/>
                            )
                        }
        */
import React from 'react';
import FullPage from './components/FullPage';


function App() {

    return ( 
      <div>
        <FullPage/>
      </div>
    );
}

export default App;


/*

function App() {
  
  const [tokenhook, updateTokenhook] = useState(0);

  function chckToken(){
    console.log('Validating user')
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        token : cookies.get('token'),
      }),
    }

    const data = fetch('http://localhost:8000/validate/token', requestOptions);

    data
    .then(response => response.json())
    .then(response => {
      if(response['detail']){
        updateTokenhook(cookies.get('token'));
        console.log(tokenhook);
      }else{
        window.alert('please clear all cookies, and relogin');
      }
    });
  
  
  }

  return (
    <div>
      {cookies.get('token')?( chckToken() ):(
          <div>
            
          </div>
        )
      }
    </div>
  );
}

export default App;
 */




//var is_auth_var = is_auth();
//console.log(is_auth_var)
//{is_auth_var?<Route path="/" component={UserHome}/>:<Route path="/" component={LandingBody}/>}
/*
  componentDidMount() {

    var token = "4f12f45301332e4a990e4fd127f12b07bc28aebf";
    var res = "";
    if (token) {

        const response = fetch('http://localhost:8000/validate/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: token,
            }),
        })
        .then( (response) => response.json())
        .then( (response) => return response );

    }else {
        return false;
    }
  }
*/
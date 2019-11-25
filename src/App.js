import React, { Component } from 'react';
import './App.css';


import GoogleLogin from 'react-google-login';

class App extends Component {

  render() {

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="App">
        <h1>LOGIN WITH GOOGLE</h1>


      <GoogleLogin
        clientId="130432465803-m27o49it68studcf7h220mkob4u4glci.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import GoogleLogin, {GoogleLogout} from 'react-google-login';

class Login extends Component {
    state={
        image:''
    }

    responseGoogle = response => {
        localStorage.setItem('image',response.profileObj.imageUrl)
        localStorage.setItem('isLogged', response.profileObj)
        this.setState({image:localStorage.getItem('image')})
    }

    logout=()=>{
        localStorage.removeItem('image')
        localStorage.removeItem('isLogged')
        this.setState({image:''})
    }
    render(){
        return (
            <div>
                <img src={localStorage.getItem('image')}/>
                <h1>Log in with Google</h1>
                <GoogleLogin
                    clientId="863481483463-6pmlikvl39n04d4ut56jlabuits9rkgo.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    isSignedIn={true}
                    cookiePolicy={"single_host_origin"}
                />
                <GoogleLogout
                    clientId="863481483463-6pmlikvl39n04d4ut56jlabuits9rkgo.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={this.logout}
                >
                </GoogleLogout>
                <br/>
                <a href="/login" style={{margin:"20px"}}>Log in as user</a>
            </div>
        )
    }
}
export default Login
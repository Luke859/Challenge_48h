import axios from "axios";
import React from "react";
import { Link, useNavigate} from "react-router-dom";
import '../../css/Login.css'

function LoginPage() {
    
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = () => {

        const userData = {
            email : email,
            password: password
        }

        axios.post('http://localhost:5000/api/users/login', userData)
        .then((res) => {
            const token = res.data.message;
            localStorage.setItem('token', token)
            navigate('/')
            alert("Login sucessfull !!")
        }).catch((err) => {
            alert("Error: " + err.message)
        })
    }

    return (
        <>
        <div class="loginPage">
            <h1>Login</h1>
            <div class="loginForm">
                {/* <form onSubmit={handleSubmit}> */}
                    <div className="mb-3">
                        <label class="form-label" >Email </label>
                        <input class="form-control" type="text" onChange={(email) => setEmail(email.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label class="form-label" >Password </label>
                        <input class="form-control" type="password" onChange={(password) => setPassword(password.target.value)} required />
                    </div>
                    <button onClick={handleSubmit}>Login</button>
                    <p className="redirect_login">Vous avez pas de compte ? <Link to="/register">Inscrivez-vous</Link></p>
                {/* </form> */}
            </div>
        </div>
        </>
    );
}
  
  export default LoginPage

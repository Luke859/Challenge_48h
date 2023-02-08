import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../css/Register.css'

function RegisterPage() {
    
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    console.log('Mail' + email);
    const [password, setPassword] = React.useState('');
    const [terms, setTerms] = React.useState(false);

    const handleSubmit = () => {

        const userData = {
            email : email,
            password: password,
            terms_and_conditions: terms
        }

        axios.post('http://localhost:5000/api/users/register', userData)
        .then((res) => {
            navigate('/login')
            alert("Login sucessfull !!")
        }).catch((err) => {
            alert("Error: " + err.message)
        })
    }

    return (
        <>
        <div class="registerPage">
            <h1>Register</h1>
            <div class="registerForm">
                {/* <form onSubmit={handleSubmit}> */}
                    <div className="mb-3">
                        <label class="form-label" >Email </label>
                        <input class="form-control" type="text" onChange={(email) => setEmail(email.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label class="form-label" >Password </label>
                        <input class="form-control" type="password" onChange={(password) => setPassword(password.target.value)} required />
                    </div>
                    <div className="button-container">
                        <input type="checkbox" onChange={(terms) => setTerms(terms.target.checked)} required/>
                    </div>
                    <button onClick={handleSubmit}> Register</button>
                    <p className="redirect_login">Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link></p>
                {/* </form> */}
            </div>
        </div>
        </>
    );
}
  
  export default RegisterPage

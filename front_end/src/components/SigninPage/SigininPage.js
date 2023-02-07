import '../../css/Login.css'
import React from "react"


function SigninPage() {

    const [password, setPassword] = React.useState('')
    const [validatePassword, setValidatePassword] = React.useState('')
    const [error, setError] = React.useState('')

    const handleLogin = (e) => {
        e.preventDefault()

        if (password != validatePassword) {
            setError('Les mots de passe ne sont pas identiques')
        }
    };    


    return (
      <>
      <div class="login">
        <h1>Bienvenue parmis nous !</h1>
        <form class="form" onSubmit={handleLogin}>
            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name"/>
            <input type="surname" class="form-control" id="exampleFormControlInput2" placeholder="surname"/>
            <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="email"/>
            <input type="password" class="form-control" id="exampleFormControlInput4" placeholder="password" onChange={e => setPassword(e.target.value)}/>
            <input type="password" class="form-control" id="exampleFormControlInput5" placeholder=" confirm password" onChange={e => setValidatePassword(e.target.value)}/>
            <button type="submit" class="submit" id="exampleFormControlInput6">S'inscrire</button>
            {error && <span class="error">{error}</span>}
        </form>
        
      </div>
      </>
      );
  }
  
  export default SigninPage
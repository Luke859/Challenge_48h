import '../../css/Login.css'

function LoginPage() {
    return (
      <>
      <div class="login">
        <h1>Bon retour parmis nous !</h1>
        <form>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email"/>
            <input type="password" class="form-control" id="exampleFormControlInput2" placeholder="password"/>
            <button type="submit" class="submit" id="exampleFormControlInput3">Se Connecter</button>
        </form>
      
      </div>
      </>
      );
  }
  
  export default LoginPage
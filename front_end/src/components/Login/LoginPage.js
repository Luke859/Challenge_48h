import '../../css/Login.css'

function LoginPage() {
    return (
      <>
      <div class="login">
        <h1>Bon retour parmis nous !</h1>
      <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <input type="password" class="form-control" id="exampleFormControlInput2" placeholder="password"/>
      </div>
      <div>
        <button type="submit" class="submit" id="exampleFormControlInput3">Se Connecter</button>
      </div>
      </div>
      </>
      );
  }
  
  export default LoginPage
import { Outlet, Link } from "react-router-dom";
import '../../css/HomePage.css'

const HomePage = () => {
  return (
    <>
        <h1>Atomics Alpaga Market</h1>
        <div className="search-container">
            <form action="/">
                <input type={"text"} placeholder={"Search.."} name={"search"} className="search"></input>
            </form>
        </div>
        <div className="cards-list">
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
        </div>
      <Outlet />
    </>
  )
};

export default HomePage;
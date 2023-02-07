import { Outlet, Link } from "react-router-dom";
import '../../css/HomePage.css'

const HomePage = () => {
  return (
    <>
        <div className="search-container">
            <form action="/">
                <input type={"text"} placeholder={"Search.."} name={"search"} className="search"></input>
            </form>
        </div>
        <div className="cards-list">
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Articles les plus vendus</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus leo libero, et volutpat erat hendrerit et. Integer tincidunt mauris a erat auctor, sit amet fringilla nisl tincidunt. Quisque ac.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Articles les plus vendus</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus leo libero, et volutpat erat hendrerit et. Integer tincidunt mauris a erat auctor, sit amet fringilla nisl tincidunt. Quisque ac.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Articles les plus vendus</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus leo libero, et volutpat erat hendrerit et. Integer tincidunt mauris a erat auctor, sit amet fringilla nisl tincidunt. Quisque ac.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Articles les plus vendus</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus leo libero, et volutpat erat hendrerit et. Integer tincidunt mauris a erat auctor, sit amet fringilla nisl tincidunt. Quisque ac.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Articles les plus vendus</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus leo libero, et volutpat erat hendrerit et. Integer tincidunt mauris a erat auctor, sit amet fringilla nisl tincidunt. Quisque ac.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
          <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                  <h5 className="card-title">Articles les plus vendus</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus leo libero, et volutpat erat hendrerit et. Integer tincidunt mauris a erat auctor, sit amet fringilla nisl tincidunt. Quisque ac.</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
        </div>
      <Outlet />
    </>
  )
};

export default HomePage;
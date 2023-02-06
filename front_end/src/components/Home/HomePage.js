import { Outlet, Link } from "react-router-dom";
import '../../css/HomePage.css'

const HomePage = () => {
  return (
    <>
        <h1>HomePage</h1>
        <div className="search-container">
            <form action="/action_page.php">
                <input type={"text"} placeholder={"Search.."} name={"search"} className="search"></input>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
      <Outlet />
    </>
  )
};

export default HomePage;
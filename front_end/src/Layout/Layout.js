import { Outlet, Link } from "react-router-dom";
import Header from '../components/Header/Header.js'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
};

export default Layout;
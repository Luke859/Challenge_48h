import { Outlet, Link } from "react-router-dom";
import '../../css/Basket.css'

const BasketPage = () => {
  return (
    <>
        <h1>Mes paniers</h1>
      <Outlet />
    </>
  )
};

export default BasketPage;
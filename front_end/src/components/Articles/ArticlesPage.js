import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import Card from '../../outils/Card.js';
import '../../css/Category.css'

export default function Categories(){

  const [categories, setCategories] = React.useState([]);

  function getAllCategories() {
    axios.get('http://localhost:5000/api/categories')
    .then((response) => {
      const categories = response.data
      setCategories(categories);
      console.log(categories);
    });
  }

  React.useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      <h1>Atomics Alpaga Market</h1>
      <div className="search-container">
          <form action="/">
              <input type={"text"} placeholder={"Search.."} name={"search"} className="search"></input>
          </form>
      </div>
      {categories.map((category) => (
          <Card 
            key={category._id}
            title={category.name}
            picture={category.picture}
            merchant={category.merchant}   
          />
      ))}
      <Outlet />
    </>
  )
}
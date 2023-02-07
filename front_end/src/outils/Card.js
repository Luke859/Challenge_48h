import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

const Card = (props) => {

  const navigate = useNavigate();

  const redirectToArticles = (getId) => {
    try{
      // axios.get(`articles/category/${getId}`)
      // navigate(`/categories/${getId}`);
      console.log('nice');
    } catch(e){
      console.log('Error: ' + e.message);
    }
  }
  

  return (
    <>
        <div className="cards-list">
            <div className="card">
                <img className="card-img-top" src="" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.picture}</p>
                    <p className="card-text">{props.merchant}</p>
                    <button className="btn btn-primary" onClick={redirectToArticles(props._id)} label="Voir ma liste">Voir article(s)</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
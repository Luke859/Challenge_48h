import { Outlet, Link } from "react-router-dom";
import React from "react";

const Card = (props) => {

  return (
    <>
        <div className="cards-list">
            <div className="card">
                <img className="card-img-top" src="" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.picture}</p>
                    <p className="card-text">{props.merchant}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
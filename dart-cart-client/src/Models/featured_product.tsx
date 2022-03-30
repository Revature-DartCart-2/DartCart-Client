import { Product } from "../common/models";
import { Link } from "react-router-dom";
import authHeader from "../features/authentication/AuthHeader";
import axios from "axios";
import React, { useState } from "react";

const MOCK_SERVER = process.env.REACT_APP_API_URL;

function addToWishList(productId){
    return axios.post(`${MOCK_SERVER}addToWishList`, {
       productId: productId
     },
       { headers: authHeader() }
     ).then(response => {
         return "Item added to wishlist!"
       }).catch((error)=>{
         return "Item already exists in wishlist!"
       })
   }
   
 async function addToWL(productId){
   const y = await addToWishList(productId);
   return React.createElement("span", {class : "wishListNotice  youCanSeeMe"}, y);
 }

export default function FeaturedProduct(props: any) {
    const [notice, setNotice] = useState(React.createElement("span", {class : "wishListNotice"}, "hey"))
    return (<div style={{ height: "30rem" }}>
        <Link to={`/shop-product/${props?.id}` || ""} style={{ textDecoration: 'none' }}>
            <div className=" card bg-black text-warning" style={{ height: "26rem", width: "18rem" }}>
                <img
                    className="testIMG"
                    src={props.imageUrl}
                    alt="Card product cap"
                ></img>
                <div className="card-body">
                    <h1>{props.productName}</h1>
                    <p>
                        price: {props.price - props.discount}
                    </p>
                    <p>discount: {((props.discount / props.price) * 100).toFixed(2)} %</p>
                </div>
            </div>
        </Link>
        {JSON.stringify(authHeader()).length > 100 ? (
        <div className=" card bg-black text-warning" style={{ height: "4rem", width: "18rem" }}>
          
          <button id="addToWishList" className="btn stretched-link  addToWishList" onClick={async () => {
            setNotice(await addToWL(props?.id));
            setTimeout(() =>{setNotice(React.createElement("span", {class : "wishListNotice"}, "hey"))}, 5000);
          }
          }>Add To Wishlist
          <div>{notice}</div>
          </button>
        </div>) : (
        <Link to={`/shop-product/${props?.id}` || ""} style={{ textDecoration: 'none' }}>
          <div className=" card bg-black text-warning" style={{ height: "4rem", width: "18rem" }}>
          </div>
        </Link>
      )}
    </div>);
}
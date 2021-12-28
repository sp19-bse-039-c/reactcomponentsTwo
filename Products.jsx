import React from 'react';
import "./products.css";


const Products = ({title,price,onAddToCart,count}) => 
{
    var classPrice = price<=500? "green" : "orange";
    
    return ( <div>
        <h1 style={{backgroundColor:"blue"}}>{title}</h1>
        {count}
        <div className={classPrice}>
        <b>Price: </b> {price}
        <button onClick={() => {
            onAddToCart(title);
        }}>Add To Cart</button>
        </div>
        <hr/ >
    </div> );
}
 
export default Products;
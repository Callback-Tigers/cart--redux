
import React, {useEffect} from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productAction";
import { addToCart } from "../redux/actions/cartActions";

const Home = () => {
     const {loading, data, error} = useSelector(state => state.product)
     const cartData = useSelector(state => state.cart)

     console.log(data)
        console.log("Cart", cartData)

     const dispatch = useDispatch()

     useEffect(() => {
            dispatch(fetchProducts())
     },[dispatch])

     function addCart(product){
            dispatch(addToCart(product))
            // add to loacal storage
            let cart = JSON.parse(localStorage.getItem("cart"))
            if(!cart){
                cart = []
            }
            localStorage.setItem("cart", JSON.stringify([...cart, product]))
     }

     return(
        <div>
               {data && data.map((product) => (
                   <div key={product.id}>
                       <img src={product.thumbnail} alt="products" />
                       <h2>{product.title}</h2>
                       <p>{product.description}</p>
                          <p>{product.price}</p>
                          <button onClick={()=>addCart(product)}>Add to Cart </button>

                   </div>
               ))
              }
        </div>
     )
}

export default Home;
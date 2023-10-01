
import React, {useEffect} from "react";

import { useSelector, useDispatch } from "react-redux";
import {removeFromCart, checkout, addToCart} from "../redux/actions/cartActions"

const Cart = () => {
        const cartData = useSelector(state => state.cart)
        console.log(cartData)

        const dispatch = useDispatch()

        useEffect(() => {
               // check if cart has some values: 
               if(cartData.length == 0){
                       // get from local storage
                       let cart = JSON.parse(localStorage.getItem("cart"))

                       cart.map(item => {
                                 dispatch(addToCart(item))
                       })
                       
               }

        },[dispatch])

        

         function remove(id){
                  dispatch(removeFromCart(id))
                  // update local storage
                  let cart = JSON.parse(localStorage.getItem("cart"))
                  let newCart = cart.filter(item => item.id != id)
                  localStorage.setItem("cart", JSON.stringify(newCart))
         }

         function reset(){
                  dispatch(checkout())
                  // update local storage
                  localStorage.setItem("cart", JSON.stringify([]))
         }
   


     return(
        <div>
                {cartData.length!=0 && cartData.map((product) => (
                   <div key={product.id}>
                       <img src={product.thumbnail} alt="products" />
                       <h2>{product.title}</h2>
                       <p>{product.description}</p>
                          <p>{product.price}</p>
                         
                         <button onClick={()=>remove(product.id)} > Remove Item</button>

                   </div>
               ))
              }
               <button onClick={reset}>Checkout</button>
        </div>
     )
}

export default Cart;
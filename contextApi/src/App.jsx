import React from "react";
import { useNotification } from "./context/NotificationContext.jsx";
import { useCartStore } from "./store/cartStore.js";

function App() {
  const { count } = useNotification();
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  //  const {cart,addToCart}=useCartStore()
  return (
    <div> 
      Hello World!
      {count}
      {cart}
    </div>
  );
}

export default App;

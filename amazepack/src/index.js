import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
export { Navbar } from "./Components/Navbar/Navbar"
export { GenreCard } from './Components/GenreCards/GenreCard'
export { ProductCard } from "./Components/Card/ProductCard"
//export { Footer } from "./Components/Footer/Footer"

// export { Signup } from "./Pages/AutheticationPages/Signup"
// export { Login } from "./Pages/AutheticationPages/Login"
// export { useProductAvailable } from "./Context/product-context"
// export { useGenre } from "./Context/genre-context"
// export { useNewArrivals } from "./Context/new-arrival-context"
// export { useToast } from './Context/toast-context';
// export { useUserLogin } from './Context/user-login-context'
// export { useWishlist } from './Context/wishlist-context';
// export { useCart } from "./Context/cart-context"
// export { useOrders } from "./Context/orders-context"
// export { useSearchBar } from "./Context/search-bar-context"

// export { Navbar } from "./Components/Navbar/Navbar"
// export { GenreCard } from './Components/GenreCards/GenreCard'
// export { NewArrivals } from "./Components/NewArrivals/NewArrival"
// export { ProductCard } from "./Components/Card/ProductCard"
// export { HorizontalProductCard } from "./Components/HorizontalCard/HorizontalProductCard"
// export { Footer } from "./Components/Footer/Footer"
// export { Sidebar } from './Components/Sidebar/Sidebar'
// export { Toast } from './Components/Toast/Toast'
// export { ShoppingBill } from './Components/ShoppingBill/ShoppingBill'
// export { WishlistProductCard } from './Components/WishlistProductCard/WishlistProductCard'
// export { ProductOrderCard } from './Components/ProductOrderCard/ProductOrderCard'
// export { Pagination } from './Components/Pagination/Pagination'

export { Home } from "./Pages/Home/Home"
export { Login } from "/home/coder/project/workspace/amazepack/src/Pages/AutheticationPages/Login"
export { Signup } from "/home/coder/project/workspace/amazepack/src/Pages/AutheticationPages/Signup"
//export { ProductPage } from "./Pages/ProductPage/ProductPage"
//export { Shop } from "./Pages/Shop/Shop"
//export { Wishlist } from "./Pages/Wishlist/Wishlist"
//export { Cart } from "./Pages/Cart/Cart"
//export { Orders } from "./Pages/Orders/Orders"



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
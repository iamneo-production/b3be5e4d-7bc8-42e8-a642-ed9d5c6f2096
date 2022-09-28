import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductsProvider } from "./Context/product-context"
import { ToastContextProvider } from './Context/toast-context';
import { UserLoginContextProvider } from './Context/user-login-context'
import { WishlistContextProvider } from './Context/wishlist-context';
import { CartContextProvider } from './Context/cart-context';
import { OrdersContextProvider } from './Context/orders-context'
import { SearchBarContextProvider } from './Context/search-bar-context'
export { useProductAvailable } from "./Context/product-context"
export { useToast } from './Context/toast-context';
export { useUserLogin } from '/home/coder/project/workspace/amazepack/src/Context/user-login-context'
export { useWishlist } from '/home/coder/project/workspace/amazepack/src/Context/wishlist-context';
export { useCart } from "/home/coder/project/workspace/amazepack/src/Context/cart-context"
export { useOrders } from "/home/coder/project/workspace/amazepack/src/Context/orders-context"
export { useSearchBar } from "./Context/search-bar-context"
export { Navbar } from "./Components/Navbar/Navbar"
export { GenreCard } from './Components/GenreCards/GenreCard'
export { NewArrivals } from "./Components/NewArrivals/NewArrivals"
export { ProductCard } from "./Components/Card/ProductCard"
export { HorizontalProductCard } from "./Components/HorizontalCard/HorizontalProductCard"
export { Footer } from "./Components/Footer/Footer"
//export { Sidebar } from './Components/Sidebar/Sidebar'
export { Toast } from './Components/Toast/Toast'
export { ShoppingBill } from './Components/ShoppingBill/ShoppingBill'
export { WishlistProductCard } from './Components/WishlistProductCard/WishlistProductCard'
export { ProductOrderCard } from './Components/ProductOrderCard/ProductOrderCard'
export { Pagination } from './Components/Pagination/Pagination'

export { Home } from "./Pages/Home/Home"
export { Login } from "./Pages/AutheticationPages/Login"
// export { Signup } from "/home/coder/project/workspace/amazepack/src/Pages/AuthenticationPages/Signup"
export { Signup } from "./Pages/AutheticationPages/Signup"
export { ProductPage } from "/home/coder/project/workspace/amazepack/src/Pages/ProductPage/ProductPage"
export { Shop } from "/home/coder/project/workspace/amazepack/src/Pages/Shop/Shop"
export { Wishlist } from "/home/coder/project/workspace/amazepack/src/Pages/Wishlist/Wishlist"
export { Cart } from "/home/coder/project/workspace/amazepack/src/Pages/Cart/Cart"
export { Orders } from "/home/coder/project/workspace/amazepack/src/Pages/Orders/Orders"

ReactDOM.render(
  <React.StrictMode>
    <UserLoginContextProvider>
      <WishlistContextProvider>
        <CartContextProvider>
          <ToastContextProvider>
                <ProductsProvider>
                  <OrdersContextProvider>
                    <SearchBarContextProvider>
                      <App/>
                    </SearchBarContextProvider>
                  </OrdersContextProvider>
                </ProductsProvider>
          </ToastContextProvider>
        </CartContextProvider>
      </WishlistContextProvider>
    </UserLoginContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// export { Navbar } from "./Components/Navbar/Navbar"
// export { GenreCard } from './Components/GenreCards/GenreCard'
// export { ProductCard } from "./Components/Card/ProductCard"
// //export { Footer } from "./Components/Footer/Footer"

// // export { Signup } from "./Pages/AutheticationPages/Signup"
// // export { Login } from "./Pages/AutheticationPages/Login"
// // export { useProductAvailable } from "./Context/product-context"
// // export { useGenre } from "./Context/genre-context"
// // export { useNewArrivals } from "./Context/new-arrival-context"
// // export { useToast } from './Context/toast-context';
// // export { useUserLogin } from './Context/user-login-context'
// // export { useWishlist } from './Context/wishlist-context';
// // export { useCart } from "./Context/cart-context"
// // export { useOrders } from "./Context/orders-context"
// // export { useSearchBar } from "./Context/search-bar-context"

// // export { Navbar } from "./Components/Navbar/Navbar"
// // export { GenreCard } from './Components/GenreCards/GenreCard'
// // export { NewArrivals } from "./Components/NewArrivals/NewArrival"
// // export { ProductCard } from "./Components/Card/ProductCard"
// // export { HorizontalProductCard } from "./Components/HorizontalCard/HorizontalProductCard"
// // export { Footer } from "./Components/Footer/Footer"
// // export { Sidebar } from './Components/Sidebar/Sidebar'
// // export { Toast } from './Components/Toast/Toast'
// // export { ShoppingBill } from './Components/ShoppingBill/ShoppingBill'
// // export { WishlistProductCard } from './Components/WishlistProductCard/WishlistProductCard'
// // export { ProductOrderCard } from './Components/ProductOrderCard/ProductOrderCard'
// // export { Pagination } from './Components/Pagination/Pagination'

// export { Home } from "./Pages/Home/Home"
// export { Login } from "/home/coder/project/workspace/amazepack/src/Pages/AutheticationPages/Login"
// export { Signup } from "/home/coder/project/workspace/amazepack/src/Pages/AutheticationPages/Signup"
// //export { ProductPage } from "./Pages/ProductPage/ProductPage"
// //export { Shop } from "./Pages/Shop/Shop"
// //export { Wishlist } from "./Pages/Wishlist/Wishlist"
// //export { Cart } from "./Pages/Cart/Cart"
// //export { Orders } from "./Pages/Orders/Orders"



// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
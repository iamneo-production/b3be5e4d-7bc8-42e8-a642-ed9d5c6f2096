import React,{ useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { useLocation } from "react-router-dom"
<<<<<<< HEAD
import image123 from "../../Assets/image123.jpg"
=======
//import LibraryIllustration from "../..//Assets/Images/Library_Illustration_1.jpg"
>>>>>>> 9fa9207571c78a811b785f6d74d50e193b1b8ff2
import './Home.css'
//import jwt_decode from "jwt-decode"
import {  
  GenreCard, 
  //NewArrivals,
  //Footer,
  //useWishlist,
  //useCart 
} from "../../index.js"
//import { useProductAvailable } from "../../Context/product-context"
//import { useGenre } from "../../Context/genre-context"

function Home() {
  /*const { dispatchProductFilterOptions } = useProductAvailable()
  const { dispatchUserWishlist } = useWishlist()
  const { dispatchUserCart } = useCart()
  const {
    setFictionCategoryCheckbox,
    setThrillerCategoryCheckbox,
    setTechCategoryCheckbox,
    setPhilosophyCategoryCheckbox,
    setRomanceCategoryCheckbox,
    setMangaCategoryCheckbox, 
  } = useGenre()

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(()=>{
      const token=localStorage.getItem('token')

      if(token)
      {
          const user = jwt_decode(token)
          if(!user)
          {
              localStorage.removeItem('token')
          }
          else
          {
              (async function getUpdatedWishlistAndCart()
              {
                  let updatedUserInfo = await axios.get(
                  "https://bookztron.herokuapp.com/api/user",
                  {
                      headers:
                      {
                      'x-access-token': localStorage.getItem('token'),
                      }
                  })

                  if(updatedUserInfo.data.status==="ok")
                  {
                      dispatchUserWishlist({type: "UPDATE_USER_WISHLIST",payload: updatedUserInfo.data.user.wishlist})
                      dispatchUserCart({type: "UPDATE_USER_CART",payload: updatedUserInfo.data.user.cart})
                  }
              })()
          }
      }   
  },[])*/

  return (
    <div className='home-component-container'>
      <div className='home-page-img-container'>
<<<<<<< HEAD
        <img className="home-page-background-img" 
        src={image123}
         alt="Online web store"
         />
=======
        <img className="home-page-background-img" src="https://imgs.search.brave.com/13B8HKrryfNUcC7szu2jYXKIlDDUBtzUR9RP86ChEVA/rs:fit:980:529:1/g:ce/aHR0cHM6Ly9waXhh/cnNhcnQuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzAy/L1RoZS1CYXNpYy1F/bGVtZW50cy1vZi1l/Q29tbWVyY2UtV2Vi/LURlc2lnbi05ODB4/NTI5LmpwZw" alt="Library Illustration"/>
>>>>>>> 9fa9207571c78a811b785f6d74d50e193b1b8ff2
      </div>

      <h1 className='homepage-headings'>Genres</h1>
      <div className='genre-cards-container'>
          
        <Link to={"/shop"}> 
            <GenreCard genretype="Fiction"/>
        </Link>
        <Link to={"/shop"}> 
            <GenreCard genretype="Thriller"/>
        </Link>
        <Link to={"/shop"}> 
            <GenreCard genretype="Tech"/>
        </Link>
        <Link to={"/shop"}> 
            <GenreCard genretype="Philosophy"/>
        </Link>
        <Link to={"/shop"}> 
            <GenreCard genretype="Romance"/>
        </Link>
        <Link to={"/shop"} state={{navigate: true}}> 
            <GenreCard genretype="Manga"/>
        </Link>

      </div>

      <Link to={"/shop"}>
        <button 
          onClick={()=>{
            console.log("its working")/*
            setFictionCategoryCheckbox(true)
            setThrillerCategoryCheckbox(true)
            setTechCategoryCheckbox(true)
            setPhilosophyCategoryCheckbox(true)
            setRomanceCategoryCheckbox(true)
            setMangaCategoryCheckbox(true)
          dispatchProductFilterOptions({type:"RESET_DEFAULT_FILTERS"}) */}  
          }
          className="solid-secondary-btn homepage-explore-all-btn">
          Explore All
        </button>
      </Link>

      <h1 className='homepage-headings'>New Arrivals</h1>
      {/* <NewArrivals/>
      <Footer/> */}

    </div>
  )
}

export { Home };
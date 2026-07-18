import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

import "./App.css";


function Home(){

  const products = [

    {
      name:"Smart Watch",
      price:"5000",
      image:"https://via.placeholder.com/250"
    },

    {
      name:"Wireless Earbuds",
      price:"3500",
      image:"https://via.placeholder.com/250"
    },

    {
      name:"Gaming Mouse",
      price:"2500",
      image:"https://via.placeholder.com/250"
    },

    {
      name:"Keyboard",
      price:"4500",
      image:"https://via.placeholder.com/250"
    }

  ];


  return(

    <>

      <Header />


      <section className="banner">

        <h1>
          Welcome to Novixa Mart
        </h1>

        <p>
          Buy anything, anytime
        </p>


        <button>
          Shop Now
        </button>

      </section>



      <main>


        <h2>
          Latest Products
        </h2>



        <div className="products">


          {
            products.map((item,index)=>(

              <ProductCard

                key={index}

                name={item.name}

                price={item.price}

                image={item.image}

              />

            ))
          }



        </div>


      </main>


    </>

  )

}





function App(){


  return(

    <BrowserRouter>


      <Routes>


        <Route

          path="/"

          element={<Home/>}

        />



        <Route

          path="/login"

          element={<Login/>}

        />



        <Route

          path="/register"

          element={<Register/>}

        />



        <Route

          path="/cart"

          element={<Cart/>}

        />


      </Routes>


    </BrowserRouter>

  )


}


export default App;
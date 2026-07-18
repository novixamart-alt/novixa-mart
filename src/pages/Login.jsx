function Login(){

  return(

    <div className="login-container">


      <div className="login-box">


        <h2>
          Welcome Back
        </h2>


        <p>
          Login to your Novixa Mart account
        </p>



        <input

          type="email"

          placeholder="Email Address"

        />



        <input

          type="password"

          placeholder="Password"

        />



        <button>

          Login

        </button>




        <div className="login-links">


          <a href="#">

            Forgot Password?

          </a>



          <p>

            Don't have an account?

            <a href="/register">

              Register

            </a>


          </p>



        </div>



      </div>


    </div>


  )

}


export default Login;
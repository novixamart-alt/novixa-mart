import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function registerUser(e) {

    e.preventDefault();


    if (!name || !email || !password) {

      alert("Please fill all fields");
      return;

    }


    try {

      const response = await fetch(
        "http://localhost:5000/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({

            name,
            email,
            password

          })

        }
      );


      const data = await response.json();


      if(response.ok){

        alert("Registration Successful 🚀");

        navigate("/login");

      } else {

        alert(data.message);

      }


    } catch(error) {

      console.log(error);

      alert("Server connection failed");

    }

  }



  return (

    <div className="login-container">

      <div className="login-box">


        <h1>
          Create Account
        </h1>


        <p>
          Join Novixa Mart
        </p>


        <form onSubmit={registerUser}>


          <input

            type="text"

            placeholder="Full Name"

            value={name}

            onChange={(e)=>setName(e.target.value)}

          />


          <input

            type="email"

            placeholder="Email Address"

            value={email}

            onChange={(e)=>setEmail(e.target.value)}

          />


          <input

            type="password"

            placeholder="Password"

            value={password}

            onChange={(e)=>setPassword(e.target.value)}

          />


          <button type="submit">

            Register

          </button>


        </form>


        <p>

          Already have an account?

          <span
            style={{
              cursor:"pointer",
              marginLeft:"8px"
            }}

            onClick={()=>navigate("/login")}
          >

            Login

          </span>

        </p>


      </div>

    </div>

  );

}


export default Register;
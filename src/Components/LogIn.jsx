import "./LogIn.css";
import Back from "./Back.png";
import Cross from "./Cross.png";
import { Link } from "react-router-dom";
import { Google } from "./Google.jsx";
// import { useEffect } from "react";
// import { googleLogout } from "@react-oauth/google";

export function LogIn() {
  // function handleCallbackResponse(response) {

  // }
  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id: "672246395799-61t60k6v9rlpc28jj7kfr1dd2kp90po4.apps.googleusercontent.com";
  //     callback: handleCallbackResponse
  //   });
  //   google.accounts.id.renderButton(
  //     document.getElementById("signInDiv"),
  //     { theme: "outline", size: "large"}
  //   );
  // }, []);
  return (
    <div className="LogIn">
      <div id="row">
        <h1>Log in</h1>
        <div id="one">
          <input
            type="text"
            id="gradient"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <br />

          <input
            type="text"
            id="gradient"
            name="password"
            placeholder="Enter your Password"
            required
          />
<Link to="/order-summary"><Google /></Link>
          
        </div>

        <Link to="/order-summary">
          <input type="button" value="Log in" id="button" />
        </Link>
        <br />
        <br />
        <a href="#marketplace">Forgot your password?</a>
        <br />

        <div id="three">
          <p>
            By logging in you agree to our
            <a href="#marketplace">Terms of Use</a> and acknowledge our
            <a href="#marketplace">Privacy Policy</a>. You also acknowledge that
            Aila uses cookies to give the best user experience.
          </p>
          <p>
            This site is protected by reCAPTCHA Enterprise and Google Privacy
            Policy and Terms of Use apply.
          </p>
          <br />
          <p id="s">
            <b>New to our platform? </b>
          </p>
          <p>
            You can register in few easy steps and after completing any
            transactions also utilise our reporting and communication tools.
          </p>
          <Link to="/get-started">
            <input type="button" value="Register" id="button1" />
          </Link>
        </div>
      </div>
      <div id="col"><Link to="/">
        <img id="back" src={Back} alt="back" />
      </Link>
      <Link to="/">
        <img id="cross" src={Cross} alt="cross" />
      </Link></div>
    </div>
  );
}

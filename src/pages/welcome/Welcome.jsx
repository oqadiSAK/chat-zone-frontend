import "./welcome.scss";
import Typewriter from "typewriter-effect";
import Login from "../../components/login/Login"
import Register from "../../components/register/Register";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const GetLocation = () => {
  const location = useLocation();
  return location.pathname;
};

const IsLoginPage = () => {
  return GetLocation().includes("login");
};

const IsRegisterPage = () => {
  return GetLocation().includes("register");
};

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="card">
        <div className="left">
          <div className="title-wrapper">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Chat Zone")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
              options={{
                loop: true,
                wrapperClassName: "title",
                cursorClassName: "title",
              }}
            />
          </div>
          <p>
            Welcome to ChatZone, the premier real-time chat application for
            engaging with friends and colleagues.
          </p>
          {IsLoginPage() && <span>Don't you have an account?</span>}
          {IsRegisterPage() && <span>Do you have an account?</span>}

          {IsLoginPage() && (
            <Link to="/register">
              <button>Register</button>
            </Link>
          )}
          {IsRegisterPage() && (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </div>
        <div className="right">
          {IsLoginPage() && <Login />}
          {IsRegisterPage() && <Register />}
        </div>
      </div>
    </div>
  );
};

export default Welcome;

import React from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const logOut = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/logout", JSON.stringify(), {
        headers: { "Content-Type": "application/json", authorization: `Bearer ${auth?.accessToken}` },
        withCredentials: true,
      });
      console.log(response);
      setAuth({})
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>Home</div>
      <button onClick={logOut}>LOGOUT</button>
    </div>
  );
};

export default Home;

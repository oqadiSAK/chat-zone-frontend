import "./register.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, } from "react";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "/auth/register",
      JSON.stringify({ username, password, email, name }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    setUsername("");
    setPassword("");
    setEmail("");
    setName("");
    navigate("/login");
  };

  return (
    <motion.div
      className="register"
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        <input
          type="email"
          placeholder="Email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <input
          type="text"
          placeholder="Name"
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <button type="submit">Register</button>
      </form>
    </motion.div>
  );
};

export default Register;

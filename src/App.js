import "./styles.scss";
import Welcome from "./pages/welcome/Welcome";
import Home from "./pages/home/Home";
import useAuth from "./hooks/useAuth";
import NotFound from "./pages/notFound/NotFound";
import PersistLogin from "./context/PersistLogin";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { auth } = useAuth();
  return (
    <div className="theme-light">
      <AnimatePresence element={<PersistLogin />}>
        <Routes>
          <Route element={<PersistLogin />}>
            <Route
              exact
              path="/"
              element={auth?.accessToken ? <Home /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/login"
              element={auth?.accessToken ? <Navigate to="/" /> : <Welcome />}
            ></Route>
            <Route
              path="/register"
              element={auth?.accessToken ? <Navigate to="/" /> : <Welcome />}
            ></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

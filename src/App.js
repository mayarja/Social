import Profile from "./pages/profile/Profile.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { useEffect } from "react";

function App() {
  let [user, setuser] = useLocalStorage("regi", false);

  let fnregister = () => {
    setuser(!user);
  };
  useEffect(() => {}, [user]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/Social/"
            element={user ? <Home /> : <Register fnregister={fnregister} />}
          />
          <Route path="/Social/profile" element={<Profile />} />
          <Route
            path="/Social/login"
            element={
              user ? (
                <Navigate to="/Social" />
              ) : (
                <Login fnregister={fnregister} />
              )
            }
          />
          <Route
            path="/Social/register"
            element={
              user ? (
                <Navigate to="/Social" />
              ) : (
                <Register fnregister={fnregister} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import AdminPage from "./pages/AdminPage";
import ProductListPage from "./pages/ProductListPage";
import AllProductsPage from "./pages/AllProductsPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetTokenPage from "./pages/ResetTokenPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import FaqPage from "./pages/FaqPage";

function App() {
  const token = localStorage.getItem("token");
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  function ProtectedRoutes({ children }) {
    if (!token) {
      return <Navigate to="/" />;
    }
    return children;
  }

  function RedirectLogin({ children }) {
    if (token) {
      return <Navigate to="/dashboard" />;
    }
    return children;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RedirectLogin>
              <Home />
            </RedirectLogin>
          }
        />
        <Route
          path="/product"
          element={
            <ProtectedRoutes>
              <ProductListPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/allproducts"
          element={
            <ProtectedRoutes>
              <AllProductsPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <AdminPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectLogin>
              <Loginpage />
            </RedirectLogin>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectLogin>
              <RegisterPage />
            </RedirectLogin>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <RedirectLogin>
              <ForgotPasswordPage />
            </RedirectLogin>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <ProfilePage />
            </ProtectedRoutes>
          }
        />
        {/* FAQ Route */}
        <Route
          path="/faq"
          element={
            <ProtectedRoutes>
              <FaqPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/api/v1/password/reset/:token"
          element={
            <RedirectLogin>
              <ResetTokenPage />
            </RedirectLogin>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

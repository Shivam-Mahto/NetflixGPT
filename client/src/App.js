import { Provider } from "react-redux";
import "./App.css";
import appStore from "./utils/appStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import GPTSearch from "./components/GPTSearch/GPTSearch";
import Browse from "./components/Browse/Browse";
import MovieDetails from "./components/Browse/MovieDetails";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />

              <Route path="movie" element={<ProtectedRoute />}>
                <Route path="browse" element={<Browse />} />
                <Route path="gptsearch" element={<GPTSearch />} />
                <Route path=":id" element={<MovieDetails />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer theme="dark" />
      </Provider>
    </div>
  );
}

export default App;

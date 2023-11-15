import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./css/style.scss"; // scss
import Home from "./routes/Home";
import Signin from "./pages/Signin";
import { store } from "./redux/store";
import Signup from "./pages/Signup";

function App(): JSX.Element {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

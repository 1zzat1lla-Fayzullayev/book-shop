import { BrowserRouter, Routes, Route } from "react-router-dom";

import './css/style.scss' // scss
import Home from "./routes/Home";
import Signin from "./pages/Signin";

function App(): JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

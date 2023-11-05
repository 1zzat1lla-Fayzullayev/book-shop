import { BrowserRouter, Routes, Route } from "react-router-dom";

import './css/style.scss' // scss
import Home from "./routes/Home";

function App(): JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

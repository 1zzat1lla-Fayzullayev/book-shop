import { useState } from "react";
import BookCards from "../components/BookCards";
import CreateABook from "../components/CreateABook";
import CreateBook from "../components/CreateBook";
import Navbar from "../components/Navbar";
function Home() {
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <div className="home">
      <Navbar />
      <CreateBook />
      <div className="book-card-menu">
        <BookCards />
      </div>
      {isDisplay && <CreateABook setIsDisplay={setIsDisplay} />}
    </div>
  );
}

export default Home;

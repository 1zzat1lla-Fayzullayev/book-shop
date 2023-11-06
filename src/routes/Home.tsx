import BookCards from "../components/BookCards";
import CreateBook from "../components/CreateBook";
import Navbar from "../components/Navbar";
function Home() {

  return (
    <div className="home">
      <Navbar />
      <CreateBook />
      <div className="book-card-menu">
        <BookCards />
      </div>
    </div>
  );
}

export default Home;

import BookCards from "../components/BookCards";
import CreateBook from "../components/CreateBook";
// import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <CreateBook />
      {/* <LoginForm /> */}
      <div className="book-card-menu">
        <BookCards />
      </div>
    </div>
  );
}

export default Home;

import BookCardsMenu from "./components/BookCardsMenu";
import CreateBook from "./components/CreateBook";
import Navbar from "./components/Navbar";

function App(): JSX.Element {
  return (
    <div>
      <Navbar />
      <CreateBook />
      <BookCardsMenu />
    </div>
  );
}

export default App;

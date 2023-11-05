import BookCardsMenu from "./components/BookCardsMenu";
import CreateABook from "./components/CreateABook";
import CreateBook from "./components/CreateBook";
import Navbar from "./components/Navbar";

function App(): JSX.Element {
  return (
    <div>
      <Navbar />
      <CreateBook />
      <BookCardsMenu />
      <CreateABook />
    </div>
  );
}

export default App;

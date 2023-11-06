import "../css/createbook.css";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useState } from "react";
import { bookData } from "../interfaces";
import "../css/createabook.css";


function MenuSearch(): JSX.Element {
  // Kitob qoshish divni hide \ show qilish
  const [show, setShow] = useState<boolean>(false);

  // Input da yozilgan malumotlarni olib olish
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let value: string = e.target.value;
    let name: string = e.target.name;
    setData({ ...data, [name]: value });
  };

  // Interface dan malumotlarni olib olish
  const [data, setData] = useState<bookData>({
    title: "",
    author: "",
    cover: "",
    published: "",
    pages: 0,
  });

  // Formga yani buttonlarda malumotlani yuborish
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("books", JSON.stringify(data));
    if (!data) {
      return;
    }
  };



  // Va TSX yani html qismi
  return (
    // "Create a book" qismi
    <div>
      <div className="container create_book_div">
        <div className="row create_book_row_div">
          <div className="col-md-6">
            <div className="h1_div">
              <h1 className="h1">
                You've got <span>7 book</span>
              </h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="elements_div">
              <input type="search" id="title" placeholder="Enter your name" />
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setShow(true)}
              >
                Create a book
              </Button>
            </div>
          </div>
        </div>
        <div className="row row_text_div">
          <div className="col-md-12 col_text_div">
            <p>Your task today</p>
          </div>
        </div>
      </div>

      {/* Form kitob qoshish uchun div */}

      {show ? (
        <form onSubmit={handleSubmit}>
          <div className="CreateBOOK">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              placeholder="Enter your author"
              value={data?.title || ""}
              onChange={handleChange}
            />
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              required
              placeholder="Enter your author"
              value={data?.author || ""}
              onChange={handleChange}
            />
            <label htmlFor="cover">Cover</label>
            <input
              type="text"
              name="cover"
              id="cover"
              required
              placeholder="Enter your cover"
              value={data?.cover || ""}
              onChange={handleChange}
            />
            <label htmlFor="published">Published</label>
            <input
              type="date"
              name="published"
              id="published"
              required
              value={data?.published || ""}
              onChange={handleChange}
            />
            <label htmlFor="pages">Pages</label>
            <input
              type="number"
              name="pages"
              id="pages"
              required
              placeholder="Enter your pages"
              value={data?.pages || ""}
              onChange={handleChange}
            />
            {/* Button uchun divlar */}
            <div className="buttons_Div">
              <div className="close button" onClick={() => setShow(false)}>
                Close
              </div>
              <button className="submit button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      ) : null}
    </div>
  );
}

export default MenuSearch;

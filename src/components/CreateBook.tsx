import "../css/createbook.css";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useState } from "react";
import { bookData } from "../interfaces";

function MenuSearch(): JSX.Element {
  interface CreateABookProps {
    setIsDisplay: (display: boolean) => void;
  }
  function CreateABook({ setIsDisplay }: CreateABookProps) {
    const [data, setData] = useState<bookData>({
      title: "",
      author: "",
      cover: "",
      published: "",
      pages: "",
    });
  }

  return (
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
                onClick={() => setIsDisplay(true)}
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
    </div>
  );
}

export default MenuSearch;

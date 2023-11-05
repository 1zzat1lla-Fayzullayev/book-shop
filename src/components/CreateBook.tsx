import "../css/createbook.css";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

function MenuSearch(): JSX.Element {
  return (
    <div>
      <div className="container create_book_div">
        <div className="row create_book_row_div">
          <div className="col-md-6">
            <div>
              <h1>You've got 7 book </h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="elements_div">
              <input type="text" id="title" placeholder="Enter your name" />
              <Button variant="contained" startIcon={<AddIcon />}>
                Create a book
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuSearch;

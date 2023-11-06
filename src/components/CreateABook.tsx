import "../css/createabook.css";
import { useState } from "react";
import { bookData } from "../interfaces";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let value: string = e.target.value;
    let name: string = e.target.name;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("books", JSON.stringify(data));
  };

  return (
    <div>
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
            // placeholder="Enter your published"
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
          <div className="buttons_Div">
            <div className="close button" onClick={() => setIsDisplay(false)}>
              Close
            </div>
            <button className="submit button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateABook;

import "../css/createabook.css";
import { ChangeEvent, useState } from 'react'
import { bookData } from "../interfaces";
import { dataArray } from "../constands";
function CreateABook() {
  const [data, setData] = useState<string>('')
  // const [array, SetArray] = useState<bookData[]>(dataArray)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setData(e.target.value);
  };
  const handeSubmit = (): void => {
    // e.preventDefault();
    // const newdata = { data: }
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handeSubmit}>
        <div className="CreateBOOK">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            placeholder="Enter your author"
            value={data}
            onChange={handleChange}
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            required
            placeholder="Enter your author"
            value={data}
            onChange={handleChange}
          />
          <label htmlFor="cover">Cover</label>
          <input
            type="text"
            name="cover"
            id="cover"
            required
            placeholder="Enter your cover"
            value={data}
            onChange={handleChange}
          />
          <label htmlFor="published">Published</label>
          <input
            type="date"
            name="published"
            id="published"
            required
            // placeholder="Enter your published"
            value={data}
            onChange={handleChange}
          />
          <label htmlFor="pages">Pages</label>
          <input
            type="number"
            name="pages"
            id="pages"
            required
            placeholder="Enter your pages"
            value={data}
            onChange={handleChange}
          />
          <div className="buttons_Div">
            <button className="close">Close</button>
            <button className="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateABook;

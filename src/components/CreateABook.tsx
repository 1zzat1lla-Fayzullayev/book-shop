import "../css/createabook.css";
function CreateABook() {
  return (
    <div>
      <div className="CreateBOOK">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter your author"
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Enter your author"
        />
        <label htmlFor="cover">Cover</label>
        <input
          type="text"
          name="cover"
          id="cover"
          placeholder="Enter your cover"
        />
        <label htmlFor="published">Published</label>
        <input
          type="text"
          name="published"
          id="published"
          placeholder="Enter your published"
        />
        <label htmlFor="pages">Pages</label>
        <input
          type="number"
          name="pages"
          id="pages"
          placeholder="Enter your pages"
        />
        <div className="buttons_Div">
          <button className="close">Close</button>
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CreateABook;

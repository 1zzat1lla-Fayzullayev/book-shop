import { useEffect, useState } from "react";

function BookCards() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("bookCards");
    if (stored) {
      setData(stored);
    }
  }, []);

  return (
    <div>
      <div className="myCard">
        <div className="innerCard">
          <div className="frontSide">
            <p className="title">FRONT SIDE</p>
            <p></p>
          </div>
          <div className="backSide">
            <p className="title">BACK SIDE</p>
            <p>Leave Me</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCards;

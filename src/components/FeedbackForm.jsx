import React, { useState } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  
  const [message, setMessage] = useState();
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) setText(e.target.value);
    {
      setBtnDisabled(true);
      setMessage("message must be at least 10 character");
    } else {
        setMessage(null)
        setBtnDisabled(false)
    }
    setMessage(e.target.value)
  };
  return (
    <Card>
      <form>
        <h2>How would you rate the service with us?</h2>
        <RatingSelect />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            placeholder="Write your review"
            value={text}
          ></input>
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default FeedbackForm;

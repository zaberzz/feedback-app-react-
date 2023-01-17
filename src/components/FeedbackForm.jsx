import React, { useState } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate the service with us?</h2>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            placeholder="Write your review"
            value={text}
          ></input>
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;

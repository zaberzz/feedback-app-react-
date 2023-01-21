import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFeedback = () => {};
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SecretPage.css";

function SecretPage() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleLeave = () => {
    navigate("/");
  };

  const checkAnswer = () => {
    if (answer.toLowerCase().includes("comment")) {
      navigate("/secondSecretPage");
    } else {
      setFeedback(
        "Hmm, think about what developers use but isn't visible during runtime!"
      );
    }
  };

  return (
    <div className="secret-container">
      <h1>Unlock the Secret Page</h1>
      <p>
        Developers, here's a fun challenge for you! To access the true secret
        page, solve this tech riddle:
      </p>

      <div className="riddle">
        <p>
          The more you have of me, the less you see. Dark is my domain. Yet,
          programmers use me daily without disdain. What am I?
        </p>
      </div>

      <input
        type="text"
        placeholder="Your answer..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button className="submit-answer" onClick={checkAnswer}>
        Submit Answer
      </button>

      <button className="leave-button" onClick={handleLeave}>
        Leave
      </button>
      {feedback && <p className="feedback-message">{feedback}</p>}
    </div>
  );
}

export default SecretPage;

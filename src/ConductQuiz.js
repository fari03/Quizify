import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';



function ConductQuiz() {
  const [quizCode, setQuizCode] = useState('');
  const [numQuestions, setNumQuestions] = useState(0);
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState(0);


  const handleSubmit = (event) => {
    event.preventDefault();

    // Code to conduct quiz
  };

  return (
    <div className="conduct-quiz">
      <h1>Conduct Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="quizCode">Quiz Code:</label>
          <input
            type="text"
            id="quizCode"
            value={quizCode}
            onChange={(event) => setQuizCode(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="numQuestions">Number of Questions:</label>
          <input
            type="number"
            id="numQuestions"
            value={numQuestions}
            onChange={(event) => setNumQuestions(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startTime">Start Time:</label>
          <input
            type="datetime-local"
            id="startTime"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (in minutes):</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
          />
        </div>
        <button type="submit">Conduct Quiz</button>
      </form>
    </div>
  );
}

export default ConductQuiz;

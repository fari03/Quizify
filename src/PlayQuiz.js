// Play Quiz component
import React from 'react';

function PlayQuiz() {
  return (
    <div>
      <h1>Play Quiz</h1>
      <form>
        <label>
          Quiz Code:
          <input type="text" name="quizCode" />
        </label>
        <br />
        <button>Join</button>
      </form>
      <div>
        <h2>Question 1:</h2>
        <p>What is the capital of France?</p>
        <form>
          <label>
            <input type="radio" name="answer" value="option1" />
            Option 1
          </label>
          <br />
          <label>
            <input type="radio" name="answer" value="option2" />
            Option 2
          </label>
          <br />
          <label>
            <input type="radio" name="answer" value="option3" />
            Option 3
          </label>
          <br />
          <label>
            <input type="radio" name="answer" value="option4" />
            Option 4
          </label>
          <br />
          <button>Next</button>
        </form>
      </div>
    </div>
  );
}

export default PlayQuiz;

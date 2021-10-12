import React, { useState } from 'react';
import questions from './data';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers About Login</h3>
        <section className="info">
          {questions.map((questions)=>{
            return (
              <SingleQuestion key={questions.id} {...questions}></SingleQuestion>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App;

import React from 'react'
import Questions from './Questions'
import { nanoid } from 'nanoid'

export default function Quiz() {
    const [myData, setMyData] = React.useState([])
    const [correctCount, setCorrectCount] = React.useState(0)
    const [reveal , setReveal] = React.useState(false)
    const [reset , setReset] = React.useState(false)
    const [selected , setSelected] = React.useState(false)
    
    React.useEffect(()=>{
        console.log("fetch called")
        fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
            .then(res=> res.json())
            .then(data => setMyData(data.results))
      },[])
      console.log(myData)

    // //Display questions and pass props
    const displayQuestions = myData.map((question, index) => (
        <Questions 
            key={index}
            question={decodeHtml(question.question)}
            iAnswers={question.incorrect_answers}
            cAnswer={question.correct_answer}
            reset={reset}
            reveal={reveal}
            count={correctCount}
        />
    ))
    // // Fix HTML elements
    function decodeHtml(html) {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
      }
    function resetGame(){
        setReset(prev => !prev)
    }
    function revealAnswers(){
        setReveal(prev => !prev)
        return(
            <div>
                <span>You scored {correctCount}/5 correct answers</span> 
                <button className="restart-button" onClick={resetGame}>Play again</button>
            </div>
        )
    }

    return (
        <div className="quiz-container">
            {displayQuestions}
            <button
                onClick={revealAnswers}
                className="submit-button"
                >Check Answers</button>
        </div>
     )
}

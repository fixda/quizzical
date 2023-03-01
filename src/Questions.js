import React from 'react'
import Answers from './Answers'

export default function Questions(props) {

  const [answers, setAnswers] = React.useState([])
  const [selected, setSelected] = React.useState(false)

  React.useEffect(()=> {
    const allAnswers = [...props.iAnswers, props.cAnswer]
    setAnswers(allAnswers.sort(()=> Math.random() - 0.5))
    // console.log("UseEffect All Answers" + allAnswers)
  },[props.cAnswer, props.iAnswers])
  // console.log(answers)  
  // console.log(props.cAnswer)
  function selectAnswer(){
    setSelected(prev => !prev)
    console.log("clicked" + selected)
  }
  //
 

  const displayAnswers = answers.map((ans, index)=>(
    <Answers 
    key={index}
    answers={ans}
    cAnswer={props.cAnswer}
    selected={selected}
    handleClick={selectAnswer}
  />
  ))

  return (
    <div>
      <div className='question-container'>{props.question}
      <div className='answers-container'>{displayAnswers}</div>
      </div>
    </div>
  )
}

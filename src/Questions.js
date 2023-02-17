import React from 'react'
import Answers from './Answers'

export default function Questions(props) {

  const [answers, setAnswers] = React.useState([])

  React.useEffect(()=> {
    const allAnswers = [...props.iAnswers, props.cAnswer]
    setAnswers(allAnswers.sort(()=> Math.random() - 0.5))
    // console.log("UseEffect All Answers" + allAnswers)
  },[props.cAnswer, props.iAnswers])
  console.log(answers)  
  console.log(props.cAnswer)

  return (
    <div>
      <div>{props.question}</div>
      <Answers 
      
      />
      {console.log('Questions')}
    </div>
  )
}

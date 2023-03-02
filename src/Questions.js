import React from 'react'


export default function Questions(props) {

  const [answers, setAnswers] = React.useState([])
  const [selected, setSelected] = React.useState(false)

  React.useEffect(()=> {
    const allAnswers = [...props.iAnswers, props.cAnswer]
    setAnswers(allAnswers.sort(()=> Math.random() - 0.5))
  },[props.cAnswer, props.iAnswers])
 
  function selectAnswer(id){
    setSelected(prev => ({
      ...prev, [id]: !prev[id]
    }))
  }
  
  // const displayAnswers = answers.map((ans, index)=>(
  //   <Answers 
  //   key={index}
  //   answers={ans}
  //   cAnswer={props.cAnswer}
  //   selected={selected}
  //   handleClick={selectAnswer}
  // />
  // ))
  const styles = (index) =>({
    backgroundColor: selected[index] ? "blue" : "white"
  })

  return (
    <div>
      <div className='question-container'>
        {props.question}
        <div className='answers-container'>
          {answers.map((ans,index) => (
              <div
                key={index}
                className="answer"
                onClick={() => selectAnswer(index)}
                style={styles(index)}
              >
                {ans}
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

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
  
  const styles = (ans, index) =>({
    backgroundColor: selected[index] ? 
                                    props.reveal ? 
                                                ans===props.cAnswer ?
                                                                   "green" :
                                               "pink" :
                                    "blue" :
                        props.reveal && ans===props.cAnswer?
                                                        "lightgreen" :
                                   "white"
  })

  return (
    <div>
      <div className='question-container'>
        {props.question}
        <div className='answer-container'>
          {answers.map((ans,index) => (
              <div
                key={index}
                className="answer"
                onClick={() => selectAnswer(index)}
                style={styles(ans, index)}
              >
                {ans}
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

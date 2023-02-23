import React from 'react'

export default function Answers(props) {

  const answerOptions = props.answers.map(options => (
    <div className='answer'>{options}</div>
  ))

  return (
    <div>
      <div className='answer-container'>{answerOptions}</div>
      {console.log('Answers')}
    </div>
  )
}

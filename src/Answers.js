import React from 'react'

export default function Answers(props) {
  const styles = {
    backgroundColor: props.selected ? "blue" : "white"
  }

  return (
    <div>
      <div 
        className='answer' 
        onClick={props.handleClick} 
        style={styles}
      >{props.answers}</div>
    </div>
  )
}

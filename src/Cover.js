import React from 'react'

export default function Cover(props) {
  return (
    <div>
        <h2 className="cover-title">Quizzical</h2>
        <p className="cover-description">Test yourself!</p>
        <button 
            onClick={props.handleStart}
            className="start-button">
            Start Quizzical
        </button>
    </div>
  )
}

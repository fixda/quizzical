import React from 'react'
// import { nanoid } from 'nanoid'
import Cover from './Cover'
import Quiz from './Quiz'

export default function App() {

    const [coverPage, setCoverPage] = React.useState(true)

    function handleStart(){
      return(
        setCoverPage(!coverPage)
      )
    }
  
  
    return (
      <main>
          {/* conditionaly render cover page untill start button is clicked */}
          {coverPage ? <Cover handleStart={handleStart} />
          :<Quiz />}
      </main>
    )
  }
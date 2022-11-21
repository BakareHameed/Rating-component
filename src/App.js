import React, {useState} from 'react'
import Hero from './Hero'
import ThankyouPage from './ThankyouPage'

const App = () => {
  const [showThankYouPage, setShowThankYouPage] = useState(false)
  const [rating, setRating] = useState(null)
  return (
    <>
      {showThankYouPage ? (
        <ThankyouPage rating={rating}/>
      ) : (
        <Hero 
          rating={rating} 
          setRating={setRating} 
          setShowThankYouPage={setShowThankYouPage}
        />
      )}
    </>
  )

}

export default App
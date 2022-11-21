import React,{useState} from 'react'
import star from './images/icon-star.svg'
import './App.css'

const Hero = ({rating, setRating, setShowThankYouPage}) => {
    const [activeRating, setActiveRating] = useState({
        oneStar: false,
        twoStar: false,
        threeStar: false,
        fourstar: false,
        fiveStar: false,
    })

    const handleSubmit = () =>{
        if(!rating) return;
        setShowThankYouPage(true)
    }

  return (
    <div className='hero h-[350px] w-[350px] mx-auto p-6 rounded-2xl flex flex-col justify-center gap-6'>
        <div className='star flex items-center justify-center rounded-full '>
            <img src={star} alt="star" />
        </div>
        <h2 className='text-white text-2xl'>How did we do?</h2>
        <p className='text-gray-400'>Please let us know how we did with your support request.All feedback is appreciated to help us improve our offering!</p>
        <div className='flex justify-between'>
            <div 
                className={activeRating.oneStar ? 'active': 'star'}
                onClick={() =>{
                    setActiveRating({
                        oneStar: true,
                        twoStar: false,
                        threeStar: false,
                        fourstar: false,
                        fiveStar: false,
                
                    })
                    setRating(1)
                }}
            >
                1
            </div>
            <div 
                className={activeRating.twoStar ? 'active': 'star'}
                onClick={() =>{
                    setActiveRating({
                        oneStar: false,
                        twoStar: true,
                        threeStar: false,
                        fourstar: false,
                        fiveStar: false,
                
                    })
                    setRating(2)
                }}
            >
                2
            </div>
            <div 
                className={activeRating.threeStar ? 'active': 'star'}
                onClick={() =>{
                    setActiveRating({
                        oneStar: false,
                        twoStar: false,
                        threeStar: true,
                        fourstar: false,
                        fiveStar: false,
                
                    })
                    setRating(3)
                }}
            >
                3
            </div>
            <div 
                className={activeRating.fourstar ? 'active': 'star'}
                onClick={() =>{
                    setActiveRating({
                        oneStar: false,
                        twoStar: false,
                        threeStar: false,
                        fourstar: true,
                        fiveStar: false,
                
                    })
                    setRating(4)
                }}
            >
                4
            </div>
            <div 
                className={activeRating.fiveStar ? 'active': 'star'}
                onClick={() =>{
                    setActiveRating({
                        oneStar: false,
                        twoStar: false,
                        threeStar: false,
                        fourstar: false,
                        fiveStar: true,
                
                    })
                    setRating(5)
                }}
            >
                5
            </div>
        </div>
        <button 
            type='button' 
            className='px-10 py-2 rounded-2xl text-white bg-orange-500 hover:text-orange-400 hover:bg-fuchsia-50'
            onClick={handleSubmit}
        >
            SUBMIT
        </button>
        
    </div>
  )
}

export default Hero
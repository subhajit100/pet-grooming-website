import React from 'react'
import ShowOffCard from './ShowOffCard'

const showOffCardsData = [
    {
        id:1,
        heading: '30k+',
        content: 'Pets Groomed'
    },
    {
        id:2,
        heading: '3 Years',
        content: 'of Serving Customers'
    },
    {
        id:3,
        heading: '100+',
        content: 'Trained Groomers'
    }
]

const ShowOffCards = () => {

  return (
    <div className='flex md:flex-row flex-col justify-center items-center lg:my-20 md:my-16 my-10'>
      {showOffCardsData.map(card => <ShowOffCard key={card.id} card={card}/>)}
    </div>
  )
}

export default ShowOffCards

import ReactStars from 'react-stars'
import React from 'react'


const ratingChanged = (newRating) => {
  console.log(newRating)
}

const UserRating = () => (
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={28}
    color2={'#ffd700'}
  />
)


export default UserRating

import React from 'react'
import DoubleKnobSlider from './DoubleKnobSlider'
import SingleKnobSlider from './SingleKnobSlider'

function RangeSlider() {
  return (
    <div className='flex flex-col space-y-10'>
      <SingleKnobSlider max={10} />
      <DoubleKnobSlider max={10} />
    </div>
  )
}

export default RangeSlider
import { useState } from 'react'

interface SingleKnobSliderProps {
  max: number
}

function SingleKnobSlider({ max }: SingleKnobSliderProps) {
  const [value, setValue] = useState(5);

  return (
    <div className="flex h-2 w-80 bg-slate-300 rounded relative">
      <div className="h-full bg-amber-400 absolute left-0 top-0 rounded" style={{ width: `${(value / max) * 100}%` }}></div>
      <input
        type="range"
        name="range"
        id="range"
        min="0"
        max={max}
        value={value}
        className="range-slider__input cursor-pointer bg-transparent w-80 z-10"
        onChange={(e) => {
          setValue(parseInt(e.target.value))
        }}
      />
    </div>
  )
}

export default SingleKnobSlider
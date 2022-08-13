import { useState } from 'react'

interface SingleKnobSliderProps {
  max: number;
  min: number;
}

function SingleKnobSlider({ min, max }: SingleKnobSliderProps) {
  const [value, setValue] = useState(5);

  return (
    <div className="flex items-center h-0.5 w-80 bg-slate-200 rounded relative">
      <div className="h-1 bg-teal-100 absolute rounded" style={{ width: `${(value / max) * 100}%` }}></div>
      <input
        type="range"
        name="range"
        id="range"
        min={min}
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
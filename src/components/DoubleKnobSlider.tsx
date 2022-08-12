import { useState } from 'react'

interface DoubleKnobSliderProps {
  max: number;
}

function DoubleKnobSlider({ max }: DoubleKnobSliderProps) {
  const [leftValue, setLeftValue] = useState(4);
  const [rightValue, setRightValue] = useState(8);

  return (
    <div className="flex items-center h-2 w-80 bg-slate-300 rounded relative">
      <div className="h-full bg-amber-400 absolute left-0 top-0 rounded" style={{ width: `${((rightValue - leftValue) / max) * 100}%`, left: `${(leftValue / max) * 100}%` }}></div>
      <input
        type="range"
        name="range"
        id="range"
        min="0"
        max={max}
        value={leftValue}
        className="range-slider__input absolute cursor-pointer bg-transparent w-80 z-10"
        onChange={(e) => {
          if (parseInt(e.target.value) >= rightValue) {
            setLeftValue(parseInt(e.target.value))
            setRightValue(parseInt(e.target.value))
          }
          setLeftValue(parseInt(e.target.value))
        }}
      />
      <input
        type="range"
        name="range"
        id="range"
        min="0"
        max={max}
        value={rightValue}
        className="range-slider__input absolute cursor-pointer bg-transparent w-80 z-10"
        onChange={(e) => {
          if (parseInt(e.target.value) <= leftValue) {
            setRightValue(parseInt(e.target.value))
            setLeftValue(parseInt(e.target.value))
          }
          setRightValue(parseInt(e.target.value))
        }}
      />
    </div>
  )
}

export default DoubleKnobSlider
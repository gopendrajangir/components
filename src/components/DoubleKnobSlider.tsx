import { useState } from 'react'
import Sprite from '../assets/img/sprite.svg';

interface DoubleKnobSliderProps {
  max: number;
  min: number;
}

function DoubleKnobSlider({ min, max }: DoubleKnobSliderProps) {
  const [leftValue, setLeftValue] = useState(4);
  const [rightValue, setRightValue] = useState(8);

  return (
    <div className='flex flex-col space-y-10'>
      <div className="flex justify-between">
        <div className="flex items-center h-10 border rounded-full">
          <div className="flex -ml-px justify-center items-center h-10 w-10 border rounded-full">
            <svg className="h-5 w-5">
              <use xlinkHref={`${Sprite}#icon-dollar-sign`} />
            </svg>
          </div>
          <input
            type="number"
            value={leftValue}
            min={min}
            max={max}
            className='range-number_input flex justify-center items-center appearance-none w-10 pl-3 rounded-full outline-none'
            onChange={(e) => {
              if (parseInt(e.target.value) >= min && parseInt(e.target.value) <= max) {
                if (parseInt(e.target.value) > rightValue) {
                  setRightValue(parseInt(e.target.value))
                }
                setLeftValue(parseInt(e.target.value))
              }
            }}
          />
        </div>
        <div className="flex items-center h-10 border rounded-full">
          <div className="flex -ml-px justify-center items-center h-10 w-10 border rounded-full">
            <svg className="h-5 w-5">
              <use xlinkHref={`${Sprite}#icon-dollar-sign`} />
            </svg>
          </div>
          <input
            type="number"
            value={rightValue}
            min={min}
            max={max}
            className='range-number_input flex justify-center items-center appearance-none w-10 pl-3 rounded-full outline-none'
            onChange={(e) => {
              if (parseInt(e.target.value) >= min && parseInt(e.target.value) <= max) {
                if (parseInt(e.target.value) < leftValue) {
                  setLeftValue(parseInt(e.target.value))
                }
                setRightValue(parseInt(e.target.value))
              }
            }}
          />
        </div>
      </div>
      <div className="flex items-center h-0.5 w-80 bg-slate-200 rounded relative">
        <div className="h-1 bg-teal-100 absolute left-0 rounded" style={{ width: `${((rightValue - leftValue) / max) * 100}%`, left: `${(leftValue / max) * 100}%` }}></div>
        <input
          type="range"
          name="range"
          id="range"
          min={min}
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
          min={min}
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
    </div>
  )
}

export default DoubleKnobSlider
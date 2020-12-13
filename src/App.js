import React, { useState } from 'react'
import './App.css'
import Drawing from './components/Drawing'
import ColorPalette from './components/ColorPalette'

const App = () => {
  const [fillColors, setFillColors] = useState(Array(184).fill('white'))
  const [currentColor, setCurrentColor] = useState('blue')

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)
  }

  return (
    <div className="App">
      <div className= "Drawing">
        <Drawing fillColors={fillColors} onFill={onFillColor} />
      </div>
      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
    </div>
  )
}

export default App

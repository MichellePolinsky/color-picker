import React, { useState } from 'react'

const HookSliders = () => {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [sat, setSat] = useState(Math.floor(Math.random() * 100))
  const [light, setLight] = useState(Math.floor(Math.random() * 100))

  const RandomColor = () => {
    setHue(Math.floor(Math.random() * 360))
    setSat(Math.floor(Math.random() * 100))
    setLight(Math.floor(Math.random() * 100))
  }

  return (
    <section>
      <div
        className="box"
        style={{
          backgroundColor: `hsl(${hue},${sat}% ,${light}%)`
        }}
      />
      <div className="hue-slider">
        <h3>Hue</h3>
        <input
          className="hue"
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={e => {
            setHue(e.target.value)
          }}
        />
      </div>

      <div className="saturation-slider">
        <h3>Saturation</h3>
        <input
          className="Sat"
          type="range"
          min="0"
          max="100"
          value={sat}
          onChange={e => {
            setSat(e.target.value)
          }}
        />
      </div>

      <div className="lightness-slider">
        <h3>Lightness</h3>
        <input
          className="light"
          type="range"
          min="0"
          max="100"
          value={light}
          onChange={e => {
            setLight(e.target.value)
          }}
        />
      </div>
      <h3> {`hsl(${hue},${sat}% ,${light}%)`}</h3>
      <button onClick={RandomColor}>Random</button>
    </section>
  )
}

export default HookSliders

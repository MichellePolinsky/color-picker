// import React, { Component } from 'react'

// class Sliders extends Component {
//   state = {
//     hue: Math.floor(Math.random() * 360),
//     sat: Math.floor(Math.random() * 100),
//     light: Math.floor(Math.random() * 100),
//     hueInput: 0,
//     satInput: 0,
//     lightInput: 0
//   }

//   saveHueInput = event => {
//     console.log(event.target.value)
//     this.setState({
//       hueInput: event.target.value,
//       hue: this.state.hueInput
//     })
//   }
//   saveSatInput = event => {
//     console.log(event.target.value)
//     this.setState({
//       satInput: event.target.value,
//       sat: this.state.satInput
//     })
//   }
//   saveLightInput = event => {
//     console.log(event.target.value)
//     this.setState({
//       lightInput: event.target.value,
//       light: this.state.lightInput
//     })
//   }

//   render() {
//     return (
//       <section>
//         <div
//           className="box"
//           style={{
//             backgroundColor: `hsl(${this.state.hue},${this.state.sat}% ,${
//               this.state.light
//             }%)`
//           }}
//         />
//         <div className="hue-slider">
//           <h3>Hue</h3>
//           <input
//             className="hue"
//             type="range"
//             min="0"
//             max="360"
//             value={this.state.hue}
//             onChange={this.saveHueInput}
//           />
//         </div>

//         <div className="saturation-slider">
//           <h3>Saturation</h3>
//           <input
//             className="Sat"
//             type="range"
//             min="0"
//             max="100"
//             value={this.state.sat}
//             onChange={this.saveSatInput}
//           />
//         </div>

//         <div className="lightness-slider">
//           <h3>Lightness</h3>
//           <input
//             className="light"
//             type="range"
//             min="0"
//             max="100"
//             value={this.state.saveLightInput}
//             onChange={this.saveLightInput}
//           />
//         </div>
//         <h2>
//           {' '}
//           {`hsl(${this.state.hue},${this.state.sat}% ,${this.state.light}%)`}
//         </h2>
//       </section>
//     )
//   }
// }

// export default Sliders

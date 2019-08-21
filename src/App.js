import React, { Component } from 'react'
import Sliders from './components/sliders'
// import Components here!

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <header className="header">COLOR-PICKER</header>
          <section className="main-body">
            <div className="box-container">
              <Sliders />
            </div>
          </section>
        </section>
        <footer>
          <button type="button">Click Me!</button>
        </footer>
      </main>
    )
  }
}

export default App

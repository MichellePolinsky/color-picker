import React, { Component } from 'react'
// import Sliders from './components/sliders'
import HookSliders from './components/HookSliders'
// import Components here!

class App extends Component {
  render() {
    return (
      <>
        <main>
          <section>
            <header className="header">COLOR-PICKER</header>
            <section className="main-body">
              <div className="box-container">
                <HookSliders />
              </div>
            </section>
          </section>
          <footer></footer>
        </main>
      </>
    )
  }
}

export default App

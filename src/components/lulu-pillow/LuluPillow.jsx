import React, { Component } from 'react'

import lulu from './lulu.png'

class LuluPillow extends Component {
  render () {
    return (
      <>
        <h1>Lulu Pillow</h1>
        <div style={{ textAlign: 'center' }}>
          <img src={lulu} />
          <br />
          <br />
          <p>I am Lulu Pillow, and I am the best ninja.</p>
        </div>
      </>
    )
  }
}

export default LuluPillow

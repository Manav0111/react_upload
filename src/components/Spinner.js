import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
     < >
        <img src={loading} alt="image is not found!" className='d-flex justify-content-center align-items-center m-auto' ></img>
     </>
    )
  }
}

export default Spinner
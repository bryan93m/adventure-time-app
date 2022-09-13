import React from 'react'
import {Link} from 'react-router-dom'
import Sequence from './assets/Sequence.mp4'

const SlashPage = () => {
  return (
    <div >
        <video src={Sequence} autoPlay muted />
        <Link to='/home' className='btn'>ENTER</Link>
    </div>

  )
}

export default SlashPage
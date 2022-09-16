import React from 'react'
import {Link} from 'react-router-dom'
import Sequence from './assets/Sequence.mp4'
import {motion} from 'framer-motion'

const SlashPage = () => {
  return (
    <motion.div
    initial={{width: 0}} 
    animate={{width: '100%'}} 
    exit={{x: window.innerWidth}}
    >
        <video src={Sequence} autoPlay muted />
        <Link to='/home' className='btn'>ENTER</Link>
    </motion.div>

  )
}

export default SlashPage
import React from 'react'
import { useContext } from 'react';
import { cart } from './LevelContext.js';

function Store({cart}) {
  return (
    <div>
        {cart}
    </div>
  )
}

export default Store
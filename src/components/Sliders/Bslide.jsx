import React from 'react'
import { useContext } from 'react'
import Small from './Small'
import Large from './Large'
function Bslide({items,num,text}) {
  return (<>
    <Small items={items} text={text}></Small>
    <Large num={num} text={text} items={items}></Large>
     </>
  )
}

export default Bslide
import React from 'react'
import {m} from '../../Data/items'
import Content from './Content'
import OrderSum from './OrderSum'
import truck2 from '../../assets/truck2.png'

function ShoppingBag({items,handleSbSflChange}) {

  return (
    <>
    <div className='bg-p1 px-[4%] phone:w-[67%] phone:inline-block'>
       <div className=' py-[5%] phone:py-[3%] border-b-[.1px] border-b-gray2 flex flex-row'>
            <div className='w-[10%] phone:w-[5%] '>
              <img className='w-[80%]' src={truck2} alt="" />
            </div>
            <div className='flex flex-col'>
                <h2 className=' font-bold text-[140%] w-[70%] phone:text-[150%] phone:w-full'>Shipping ({items.length}) items</h2>
                <label className=' text-gray5' htmlFor="">International shipping</label>
            </div>
       </div>
       
       <Content items={items} text={'save for later'} />


    </div>
    <OrderSum items={items}/>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    </>
  )
}

export default ShoppingBag
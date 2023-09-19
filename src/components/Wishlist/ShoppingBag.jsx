import React from 'react'
import {m} from '../../Data/items'
import Content from './Content'
import OrderSum from './OrderSum'
import truck2 from '../../assets/truck2.png'

function ShoppingBag({items,handleSbSflChange,children}) {

  return (
    <>
    <div className='phone:w-[67%] phone:inline-block phone:float-left'>
        <div className=' px-[4%] bg-p1 phone:px-[2%] phone:w-full   phone:mb-[2%] '>
          <div className=' py-[5%] phone:py-[1%] phone:pt-[3%] border-b-[1px] border-gray2  flex flex-row'>
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
        {children}
    </div>
    <OrderSum items={items}/>
    

    </>
  )
}

export default ShoppingBag
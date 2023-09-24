import React, { useState } from 'react'
import { filters } from '../../Data/FIlters';
import './styles.css/scrollBar.css'

function FIlters({handlefilterChange,filter}) {
  return (<>
            <div className=' ms:block hidden pr-[0%] overflow-y-scroll sc max-h-screen '>
              
              <div className=" flex flex-col   pb-[15%] transition-all duration-200 ">
                 {filters.map((filters,i)=>{
                  return(
                 <div key={i}>
                   <Filter  handlefilterChange={handlefilterChange} filter={filter} filters={filters} />
                 </div>)
                 })}
              </div>


            </div>


            <div className=' phone:hidden  w-[20%] text-white rounded-full relative  '>
                  <div className='  w-[100%] pb-[100%] translate-x-[50%] bg-dark2 rounded-full relative'>
                       <div className=' absolute flex items-center text-[150%] justify-center w-full h-full '>
                       <ion-icon name="filter-outline"></ion-icon>
                       </div>
                  </div>
            </div>

    </>
  );
}


const Filter = ({filters,handlefilterChange,filter})=>{
  const [show,setShow] = useState(false)
  return(<>
                  <div className='flex flex-col overflow-hidden mb-[2%]'>
                        <div onClick={()=>{
                          setShow(s=> !s)}} className='border-t-[1px] text-[105%] border-gray3 py-[7%]'>{filters.name}</div>
                        <div className={` ${ show ? 'max-h-[30rem]':'max-h-0'} tmaxh duration-[300ms]`}>
                          {filters.content.map(f=>{
                            return(<div key={f.name+Math.random()}>
                                <div className='flex flex-row gap-[1%] items-center my-[.5%] '>
                                    <div className={` ${f.name === filter ? 'bg-black':''} w-[4.5%] pb-[4.5%] rounded-[50%] border-[1px] br`}></div>
                                    <button onClick={()=> handlefilterChange(f.name)} className='flex flex-row items-center justify-center'>{f.name}</button>
                                </div>
                            </div>)
                          })}
                        </div>
                    </div>
  </>)
}


export default FIlters

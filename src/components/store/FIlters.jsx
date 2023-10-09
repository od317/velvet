import React, { useState } from 'react'
import { filters } from '../../Data/FIlters'
import './styles.css/scrollBar.css'
import close from '../../assets/close.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'

function FIlters({sFilter,handlefilterChange,filter}) {
  let nfilter = filter.map(i=>{
    return i.val
  })
  nfilter = [].concat(...nfilter)
  const filtersSet = new Set(nfilter.map(f=>{
    return f
  }))
  return (<>
            <div className=' block  w-full ms:pr-[5%] overflow-y-scroll sco sc max-h-screen '>
              {nfilter.length >0 && <div className=''> <span className='font-bold'>Filtered by:</span> {nfilter.length}</div>}
              <div className='flex flex-wrap  w-[100%]'>
                  {filters.map((filters,i)=>{
                              return(
                              <FilterTop  handlefilterChange={handlefilterChange} filter={filter} filters={filters} />
                            )
                  })}
              </div>
              <div className=" flex flex-col  w-full pb-[15%] transition-all duration-200 ">
                 {filters.map((filters,i)=>{
                  return(
                 <div key={filters.name}>
                   <Filter sFilter={sFilter} handlefilterChange={handlefilterChange} filter={filter} filters={filters} />
                 </div>)
                 })}
              </div>


            </div>





    </>
  );
}


const Filter = ({sFilter,filters,handlefilterChange,filter})=>{
  const [show,setShow] = useState(sFilter === filters.name ? true : false)
  let nfilter = filter.map(i=>{
    return i.val
  })
  nfilter = [].concat(...nfilter)
  const filtersSet = new Set(nfilter.map(f=>{
    return f
  }))
  return(<>
                  <div className=' flex flex-col overflow-hidden mb-[2%]'>
                        <div onClick={()=>{
                          setShow(s=> !s)}} className='border-t-[1px] text-[105%] ms:px-[0%] px-[4%] cursor-pointer border-gray3 py-[8%]'>{filters.name}</div>
                        <div className={` ${ show ? 'max-h-[30rem]':'max-h-0'} tmaxh duration-[300ms]`}>
                          {filters.content.map(f=>{
                            return(<div key={f.val}>
                                <div className='flex ms:px-[0%] px-[4%] flex-row gap-[1%] items-center my-[.5%] '>
                                    <div className={` ${filtersSet.has(f.val) ? 'bg-black':''} w-[5%] pb-[5%]  border-[1px]`}></div>
                                    <button onClick={()=> handlefilterChange(filters.name,f.val)} className='flex  flex-row items-center justify-start text-start'>{f.name}</button>
                                </div>
                            </div>)
                          })}
                        </div>
                    </div>




                 
                  
                 

  </>)
}

const FilterTop = ({filters,handlefilterChange,filter})=>{
        let nfilter = filter.map(i=>{
          return i.val
        })
        nfilter = [].concat(...nfilter)
        const filtersSet = new Set(nfilter.map(f=>{
          return f
        }))
        return(<>
                                {filters.content.map((f,i)=>{
                                  return(<div key={f.name}>
                                  {filtersSet.has(f.val)&&
                                    (<div   className=' min-w-[40%] mr-[2%] my-[1%] flex text-[100%] items-center cursor-pointer ' key={f.name+Math.random()}>
                                        <div onClick={()=> handlefilterChange(filters.name,f.val)} className=' items-center hover:bg-gray2 transition-all duration-200 flex'>
                                          <button  className='w-full  text-start'>{f.name}</button>
                                          <img src={close} className={'inline-block h-[1rem] w-[1rem] translate-y-[10%] '} alt="" />
                                        </div>
                                     </div>
                                    )}
                                        </div>
                                )
                                  })}
        </>)
}

export default FIlters

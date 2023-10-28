import React, { useState } from 'react'
import { filters } from '../../Data/FIlters'
import './styles.css/scrollBar.css'
import close from '../../assets/close.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { Routes, Route, useParams, useSearchParams } from 'react-router-dom'

function FIlters({sFilter,handlefilterChange,filter,searchq}) {
  const [searchParams, setSearchParams] = useSearchParams() 
  let nfilter = filter.map(i=>{
    return i.val
  })
  nfilter = [].concat(...nfilter)
  const filtersSet = new Set(nfilter.map(f=>{
    return f
  }))

  const clearAllF = ()=>{
    let fs = []
    filter.map(filter=>{
      filter.val.map(f=>{
        fs.push([filter.name,f])
      })
    })
    handlefilterChange(fs)
    searchParams.delete('searchq')
    setSearchParams(searchParams)
  }

  return (<>
            <div className=' block  w-full pt-[1%]  ms:pr-[5%] overflow-y-scroll sco sc max-h-screen '>
              {nfilter.length >0&& (
              <>
              <div className='ms:pl-[0%] pl-[5%]'> <span className='font-bold'>Filtered by:</span> {nfilter.length}</div>
              <button onClick={()=>clearAllF()} className=' ms:pl-[0%] flex items-center justify-center pl-[5%] '>
                Clear All
                <img src={close} className={'inline-block h-[1rem] w-[1rem] translate-y-[10%] '} alt="" />
                
                </button>
              <div className='grid grid-cols-2 ms:pl-[0%] pl-[5%] mb-[2%] w-[100%]'>
                  {filters.map((filters,i)=>{
                              return(
                              <FilterTop  handlefilterChange={handlefilterChange} filter={filter} filters={filters} />
                            )
                  })}
              </div>
              </>)
              }
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
                                <button onClick={()=> handlefilterChange([[filters.name,f.val]])} className='flex w-full  ms:px-[0%] px-[4%] flex-row  items-center my-[.5%] '>
                                    <div className={` ${filtersSet.has(f.val) ? 'bg-black':''} w-[5%] pb-[5%] mr-[1%] cursor-pointer border-[1px]`}></div>
                                    <label  className='flex  flex-row items-center justify-start cursor-pointer text-start'>{f.name}</label>
                                </button>
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
                                  if(filtersSet.has(f.val))
                                  return(<div className={` ${f.name.length>6 ? ' col-span-1 ms:col-span-2':'ms:col-span-1'} w-full  `} key={f.name}>
                                    <div   className=' w-full  mr-[2%] my-[1%] flex text-[100%] items-center cursor-pointer ' key={f.name+Math.random()}>
                                        <div onClick={()=> handlefilterChange([[filters.name,f.val]])} className=' items-center hover:bg-gray2 transition-all duration-200 flex'>
                                          <button  className='w-full  text-start'>{f.name}</button>
                                          <img src={close} className={'inline-block h-[1rem] w-[1rem] translate-y-[10%] '} alt="" />
                                        </div>
                                     </div>
                                    
                                        </div>
                                )
                                  })}
        </>)
}

export default FIlters

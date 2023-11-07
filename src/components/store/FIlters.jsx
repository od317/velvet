import React, { useState,useEffect} from 'react'
import { filters } from '../../Data/FIlters'
import './styles.css/scrollBar.css'
import close from '../../assets/close.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { Routes, Route, useParams, useSearchParams } from 'react-router-dom'

function FIlters({sFilter,handelSfiltersChange,handlefilterChange,filter,showSfilters,setSFilter}) {
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
                              <FilterTop key={filters.name} handlefilterChange={handlefilterChange} filter={filter} filters={filters} />
                            )
                  })}
              </div>
              </>)
              }
              <div className=" flex flex-col  w-full pb-[15%] transition-all duration-200 ">
                 {filters.map((filters,i)=>{
                  return(
                 <div key={filters.name}>
                   <Filter showSfilters={showSfilters} setSFilter={setSFilter} handelSfiltersChange={handelSfiltersChange} sFilter={sFilter} handlefilterChange={handlefilterChange} filter={filter} filters={filters} />
                 </div>)
                 })}
              </div>


            </div>





    </>
  );
}


const Filter = ({sFilter,showSfilters,handelSfiltersChange,filters,handlefilterChange,filter,setSFilter})=>{
  const [show,setShow] = useState(sFilter == filters.name)
  let nfilter = filter.map(i=>{
    return i.val
  })
  nfilter = [].concat(...nfilter)
  const filtersSet = new Set(nfilter.map(f=>{
    return f
  }))
  useEffect(()=>{
    if(!showSfilters)
       setShow(false)
  },[showSfilters])

  useEffect(()=>{
    if(sFilter == filters.name)
       setShow(true)
  },[sFilter])

  return(<>
                  <div className=' flex  flex-col overflow-hidden mb-[2%]'>
                        <div onClick={()=>{
                          
                          setShow(s=> sFilter.length&&sFilter==filters.name ? false:!s)
                          setSFilter('')
                          }} className='border-t-[1px] text-[105%] navmid:px-[0%] px-[4%] cursor-pointer border-gray3 py-[8%]'>{filters.name}</div>
                        <div className={` ${ sFilter == filters.name || show ? 'max-h-[30rem]':'max-h-0'} tmaxh duration-[300ms]`}>
                          {filters.content.map(f=>{
                            return(<div key={f.val}>
                                <button onClick={()=>{
                                  handlefilterChange([[filters.name,f.val]])
                                  }} className='flex w-full  navmid:px-[0%] px-[4%] flex-row  items-center my-[.5%] '>
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
                                  return(<div key={f.name} className={` ${f.name.length>6 ? 'col-span-2':'col-span-1'}  w-full  `} >
                                    <div key={f.name}  className=' w-full  mr-[2%] my-[1%] flex text-[100%] items-center cursor-pointer '>
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

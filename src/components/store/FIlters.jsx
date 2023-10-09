import React, { useState } from 'react'
import { filters } from '../../Data/FIlters'
import './styles.css/scrollBar.css'
import close from '../../assets/close.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'

function FIlters({handlefilterChange,filter}) {
  let nfilter = filter.map(i=>{
    return i.val
  })
  nfilter = [].concat(...nfilter)
  const filtersSet = new Set(nfilter.map(f=>{
    return f
  }))
  return (<>
            <div className=' ms:block hidden w-full pr-[5%] overflow-y-scroll sc max-h-screen '>
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
                   <Filter  handlefilterChange={handlefilterChange} filter={filter} filters={filters} />
                 </div>)
                 })}
              </div>


            </div>

            <div className=' w-full ms:hidden'>
                    <Swiper
                    slidesPerView={2.5}
                    spaceBetween={4}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper "
                  >
                    {filters.map((filters,i)=>{
                    return(
                      <SwiperSlide key={filters.name}>
                          <Filter  handlefilterChange={handlefilterChange} filter={filter} filters={filters} />
                      </SwiperSlide>

                     )
                    })}

                  </Swiper>
            </div>



    </>
  );
}


const Filter = ({filters,handlefilterChange,filter})=>{
  const [show,setShow] = useState(false)
  let nfilter = filter.map(i=>{
    return i.val
  })
  nfilter = [].concat(...nfilter)
  const filtersSet = new Set(nfilter.map(f=>{
    return f
  }))
  return(<>
                  <div className='hidden ms:flex flex-col overflow-hidden mb-[2%]'>
                        <div onClick={()=>{
                          setShow(s=> !s)}} className='border-t-[1px] text-[105%] cursor-pointer border-gray3 py-[8%]'>{filters.name}</div>
                        <div className={` ${ show ? 'max-h-[30rem]':'max-h-0'} tmaxh duration-[300ms]`}>
                          {filters.content.map(f=>{
                            return(<div key={f.val}>
                                <div className='flex flex-row gap-[1%] items-center my-[.5%] '>
                                    <div className={` ${filtersSet.has(f.val) ? 'bg-black':''} w-[5%] pb-[5%]  border-[1px]`}></div>
                                    <button onClick={()=> handlefilterChange(filters.name,f.val)} className='flex  flex-row items-center justify-start text-start'>{f.name}</button>
                                </div>
                            </div>)
                          })}
                        </div>
                    </div>

                    <div className='ms:hidden w-full relative'>
                         <div className=''>
                              {filters.name}
                         </div>
                         <div className='flex flex-col bg-red absolute  w-full  transition-all duration-200  items-start'>
                             <button className='w-full  my-[1%] hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[2%]'>1</button>
                             <button className='w-full  my-[1%] hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[2%]'>1</button>
                             <button className='w-full  my-[1%] hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[2%]'>1</button>
                             <button className='w-full  my-[1%] hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[2%]'>1</button>
                         </div>
                    </div>


                    {/* <div className='ms:hidden overflow-y-visible mb-[2%]'>
                        <div onClick={()=>{
                          setShow(s=> !s)}} className=' text-[105%] cursor-pointer  py-[8%]'>{filters.name}</div>
                        <div className=' relative w-full z-[10] h-[1rem]'>
                            <div className={` ${ show ? 'max-h-[30rem] ':'max-h-0 '} w-full bg-red-500 absolute tmaxh duration-[300ms]`}>
                              {filters.content.map(f=>{
                                return(<div key={f.val}>
                                    <div className='flex flex-row gap-[1%] items-center my-[.5%] '>
                                        <button onClick={()=> handlefilterChange(filters.name,f.val)} className='flex  flex-row items-center justify-start text-start'>{f.name}</button>
                                    </div>
                                </div>)
                              })}
                            </div>
                        </div>
                    </div> */}

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

import React from 'react'
import { useEffect } from 'react'
import { useState,useRef } from 'react'
import { m } from '../../Data/items'
import Card from '../store/Card'
const Large = ({items,text,num})=>{
    let sim = []
    let flexes = []
    let tmp = []
    sim = items.map(i=>{
        tmp.push(m[i])
        if(tmp.length === num){
          flexes.push([...tmp])
          tmp = []
        }
        return m[i]
      })
    
    if(tmp.length){
      flexes.push([...tmp])
      tmp = []
    }
    const [len,setLen] = useState(sim.length-(num-1))
    const [slidePer,setSlidePer] = useState(0)
    const nextButton = useRef(null)
    const PrevButton = useRef(null)
    const perc = (100/num)*(num-1)


    const slideNext = ()=>{
      if(len<=0)
         return
          nextButton.current.disabled = true
          setTimeout(()=>{
              nextButton.current.disabled = false
          },500)
      setLen(l=>l-(num-1))   
      setSlidePer(s=>s+perc)
    }
    
    const slidePrev = ()=>{
      if(len===sim.length-(num-1))
         return
        PrevButton.current.disabled = true
        setTimeout(()=>{
             PrevButton.current.disabled = false
        },500)  
      setLen(l=>l+(num-1))
      setSlidePer(s=>s-perc)
    }

    return(<>
    
          <div className=' hidden navmid:flex  flex-col w-full  py-[2%] bg-p1'>
                
                {text?(<div className='text-[120%] font-semibold ' htmlFor="">{text}</div>):null}

                <div className={`flex justify-between  ${text?'mt-[2%]':''}`}>
                    
                    <div className='flex  items-center w-[3%]  justify-center'>
                         <button ref={PrevButton} disabled={len===sim.length-(num-1)} onClick={()=>{slidePrev()}} className={` ${len===sim.length-(num-1) ? ' cursor-default text-gray3':' hover:bg-dark2 hover:text-white cursor-pointer disabled:cursor-pointer'}  text-black tra bg-p1  flex items-center justify-center  transition-all duration-200 py-[50%] w-full `}>
                            <ion-icon name="chevron-back-outline"></ion-icon>
                         </button>
                    </div>
                    <div className='w-[94%] overflow-hidden'>
                        <div style={{transform:`translateX(-${slidePer}%)`}} className=' top-0 whitespace-nowrap transition-all  duration-[500ms]'>
                            {flexes.map((f,i)=>{
                            return(<>
                                     
                                          {f.map((i,index)=>{
                                            return(
                                            <div key={index} style={{width:`${100/num}%`}} className={`  px-[1.5%] top-0 sticky transition-all duration-300 inline-block   text-[100%] `} >
                                              <Card product={i}></Card>
                                            </div>
                                                  )
                                            })
                                          }
                                      </>
                                 )
                                  })}
                        </div>
                    </div>
                    <div className='flex  items-center w-[3%]  justify-center'>
                         <button ref={nextButton} disabled={len<=0} onClick={()=>{slideNext()}} className={` ${len<=0 ? ' cursor-default text-gray3':' hover:bg-dark2 hover:text-white cursor-pointer disabled:cursor-pointer'}  text-black tra bg-p1  flex items-center justify-center  transition-all duration-200 py-[50%] w-full `}>
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                         </button>
                    </div>
                
                </div>
  
          </div>
  
    </>)
  }

export default Large
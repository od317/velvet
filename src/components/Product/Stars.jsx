import React from 'react';

const Stars = ({rate})=>{
    const rate1 = rate.rate
    const numrate = rate.numrate
    const full = Math.floor(rate1/2)
    const half  = rate1%2 === 0 ? 0 : (1-(Math.ceil(rate1/2) - (rate1/2)))
    const rest =  (5) - (Math.ceil(half) + full)
    let fullDivs = []
    let halfDiv = []
    let resDivs = []
   
    for(let i =0;i<full;i++){
       fullDivs.push(<div className={` bg-black  star w-[19.7%] pb-[19.7%] mr-[.3%]  inline-block`}></div>)
    }  

    if(half !==0){
        halfDiv.push(<div className={` overflow-hidden bg-gray2 star w-[19.7%] relative pb-[19.7%] mr-[.3%]  inline-block`}>
                <div style={{width:`${parseInt(half*100)}%`}} className={`  absolute h-full bg-black `}></div>
        </div>)
    }
    
    for(let i =0;i<rest;i++){
        resDivs.push(<div className={` bg-gray2  star w-[19.7%] pb-[19.7%] mr-[.3%]  inline-block`}></div>)
     }  
    return(<>
                <div className=' w-full flex phone:justify-start justify-center '>                
                    <div className=' w-[50%] max-w-[5rem] float-left'>
                    {fullDivs.map((i,index)=>{
                        return(
                            <div key={index} className={` bg-black  star w-[19.7%] pb-[19.7%] mr-[.3%]  inline-block`}></div>
                        )
                    })}
                    {halfDiv.map((i,index)=>{
                        return(
                            <div key={index} className={` overflow-hidden bg-gray2 star w-[19.7%] relative pb-[19.7%] mr-[.3%]  inline-block`}>
                                    <div style={{width:`${parseInt(half*100)}%`}} className={`  absolute h-full bg-black `}></div>
                            </div>
                        )
                    })}
                    {resDivs.map((i,index)=><div key={index} className={` bg-gray2  star w-[19.7%] pb-[19.7%] mr-[.3%]  inline-block`}></div> )}
                    </div>
                    <div className=' text-[90%] text-gray  float-right' htmlFor="">({numrate})</div>
                </div>
    </>)
}

export default Stars;

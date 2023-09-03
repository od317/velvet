import React, { useState } from 'react'
import FIlters from './FIlters'
import Sort from './Sort'
import StoreGrid from './StoreGrid'

function StoreLayout({sortP}) {

     const [sort,setSort] = useState(sortP||'recomended')
     const [filter,setFilter] = useState('')
     const [items_show,setItemsShow] = useState(
          sortP ? StartFilter() : items
     )

       function StartFilter(){
          let nextItems = items
          switch(sort){
               case 'price low to high':
                         nextItems.sort((a,b)=>{
                             return a.price - b.price
                         })
                    break
               case 'price high to low':
                         nextItems.sort((a,b)=>{
                              return b.price - a.price
                         })
                    break
               case 'date':
                    nextItems.sort((a,b)=>{
                         return b.date - a.date
                    })
                    break          
               default :
               break
          }
           return nextItems
     }

    const handlefilterChange = (value)=>{
         if(filter === value){
          setFilter('')
          handleItemsChange('')
          return
         }
         setFilter(value)
         handleItemsChange(value)
    }

    const handleItemsChange = (value)=>{
      let nextItems = items
      switch(value){
          case 'sm':
               nextItems = nextItems.filter(i=>{
                    return i.size === 'sm'
               })
               break
          case 'medium':
               nextItems = nextItems.filter(i=>{
                         return i.size === 'medium'
                    })
                    break  
          case 'lg':
               nextItems = nextItems.filter(i=>{
                         return i.size === 'lg'
                    })
                    break               
          default :
               break     
      }
      handleSortItemsChange(sort,nextItems)
    }


    const handleSortChange = (value)=>{
     setSort(value)
     handleSortItemsChange(value)
    } 
    
    const handleSortItemsChange = (value,nextItems = items_show)=>{
          switch(value){
               case 'price low to high':
                         nextItems.sort((a,b)=>{
                             return a.price - b.price
                         })
                    break
               case 'price high to low':
                         nextItems.sort((a,b)=>{
                              return b.price - a.price
                         })
                    break
               case 'date':
                    nextItems.sort((a,b)=>{
                         return b.date - a.date
                    })
                    break          
               default :
               break
          }
          setItemsShow(nextItems)
    }

  return (<>
    <div className=' hidden phone:block'>
          <Sort sort={sort} handleSortChange={handleSortChange} />
    </div>
    <div className=' flex flex-col relative phone:flex-row'>
      
         <div className=' pb-[70%] relative phone:hidden  '>
                     <img className=' absolute w-full ' 
                     src="https://s3-media0.fl.yelpcdn.com/bphoto/s3J5l1SCn7p1fRY8zdU2cg/348s.jpg" alt="" />
         </div>
      
         <div className='phone:hidden bg-light2 z-[2] p-[3%] rounded-tl-3xl w-[70%]'>
             <Sort sort={sort} handleSortChange={handleSortChange} />
             <FIlters filter={filter}  handlefilterChange={handlefilterChange} />
         </div>
   
         <div className=' hidden phone:block phone:w-[20%]  phone:px-[2%] z-[2]  top-[0%] phone:h-fit phone:sticky phone:top-[10%] '>
              <FIlters filter={filter}  handlefilterChange={handlefilterChange} />
         </div>
      
         <div className=' phone:w-[80%] h-[300rem] z-[1] bg-light2 px-[2%] pb-[100%]'>
              <StoreGrid items={items_show}/>
         </div>

    </div>
    </>
  )
}


const items = [
     {
          name:'shirt',
          size:'sm',
          price:'10',
          date:'15',
          id:'t1',
          img:'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
     },
     {
          name:'tshirt',
          size:'lg',
          price:'30',
          date:'1',
          id:'t2',
          img:'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
     
     },
     {
          name:'jacket',
          size:'xl',
          price:'15',
          date:'13',
          id:'t10',
          img:'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
     
     },
     {
          name:'shirt',
          size:'lg',
          price:'120',
          date:'10',
          id:'t4',
          img:'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
     
     },
     {
          name:'tshirt',
          size:'2xl',
          price:'20',
          date:'100',
          id:'t5',
          img:'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
     
     },
     {
          name:'shirt',
          size:'sm',
          price:'13',
          date:'12',
          id:'t6',
          img:'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
     
     },
     {
          name:'jacket',
          size:'sm',
          price:'30',
          date:'1',
          id:'t7',
          img:'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
     
     },
     {
          name:'jacket',
          size:'medium',
          price:'11',
          date:'15',
          id:'t8',
          img:'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
     
     },
     {
          name:'tshirt',
          size:'xl',
          price:'50',
          date:'21',
          id:'t9',
          img:'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
     },
]


export default StoreLayout

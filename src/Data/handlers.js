
const handleItemsChangeSwitch = (nextItems1,filters)=>{
    let ans = []
    for(let i =0;i<filters.length;i++){ 
               if(!filters[i].val || filters[i].val.length==0){
                    continue
               }
               ans = []
               let list = filters[i].val
               let nextItems = [...nextItems1]
               for(let value of list){
               switch(value){
                    case 'sm':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.size.has('sm') 
                         })]
                         break
                    case 'medium':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.size.has('medium')
                         })]
                              break  
                    case 'large':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.size.has('large')
                         })]
                              break  
                    case 'xl':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.size.has('xl')
                         })]
                              break  
                    case '2xl':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.size.has('2xl')
                         })]
                              break  
                    case '3xl':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.size.has('3xl')
                         })]
                              break  
                    case 'Lauren Ralph Lauren':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.brand === 'Lauren Ralph Lauren'
                         })]
                              break  
                    case 'Canada Goose':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.brand === 'Canada Goose'
                         })]
                              break  
                    case '20':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.dis >= 20
                         })]
                              break  
                    case '30':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.dis >= 30
                         })]
                              break  
                    case '40':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.dis >= 40
                         })]
                              break  
                    case '50':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.dis >= 50
                         })]
                              break  
                    case '60':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.dis >= 60
                         })]
                              break  
                    case '100':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.price <= 100 && i.price >=0
                         })]
                              break  
                    case '200':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.price <= 200 && i.price >=100
                         })]
                              break  
                    case '300':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.price <= 300 && i.price >=200
                         })]
                              break  
                    case '400':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.price <= 400 && i.price >=300
                         })]
                              break  
                    case '500':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.price <= 500 && i.price >=400
                         })]
                              break  
                    case '600':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.price <= 600 && i.price >=500
                         })]
                              break  
                    case '700':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.price <= 700 && i.price >=600
                         })]
                              break  
                    case '800':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.price <= 800 && i.price >=700
                         })]
                              break  
                    case '900':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.price <= 900 && i.price >=800
                         })]
                              break  
                    case '1000':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.price <= 1000 && i.price >=900
                         })]
                              break  
                    case '2000':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.price <= 2000 && i.price >=1000
                         })]
                              break  
                    case 'sale':
                         ans = [...ans,...nextItems.filter(i=>{
                              return i.dis
                         })]
                              break  
                    case 'regular':
                         ans = [...ans,...nextItems.filter(i=>{
                              return !i.dis
                         })]
                              break
                              
                    default :
                         break     
               }
          }
          nextItems1 = [...ans]
   }
    ans = Array.from(new Set(ans))
    if(ans.length == 0){
     ans = [...nextItems1]
    }
    return ans
}

const handleSortItemsChangeSwitch = (nextItems,value)=>{
       switch(value){
        case 'price low to high':
                  nextItems.sort((a,b)=>{
                    return price(a) - price(b)
                })
             break
        case 'price high to low':
                  nextItems.sort((a,b)=>{
                       
                       return price(b) - price(a)
                  })
             break
        case 'date':
             nextItems.sort((a,b)=>{
                  return b.date - a.date
             })
             break  
        case 'rate':
             nextItems.sort((a,b)=>{
                  return b.rate.rate - a.rate.rate
             })
             break
        case 'featured':  
        nextItems.sort((a,b)=>{
             return b.featured - a.featured
        })
               break                          
        default :
        break
   }
   return nextItems
}

function price(p){
         let o = 0 
         if(p.dis){
            o = p.price - (p.price*p.dis/100)
            o = o.toFixed(2)
            return o
        }  
         return p.price  
}

const changeFilterList = (list,val)=>{
      let s = new Set(list)
      if(s.has(val)){ 
        s.delete(val)
        list = Array.from(s)
      }
      else
        list = [...list,val]
      return list
}

export {handleSortItemsChangeSwitch,handleItemsChangeSwitch,changeFilterList}
import items from "./items"


const findMatch = (searchq,i)=>{
    if(matchWords(i.type.toLocaleLowerCase(),searchq.toLocaleLowerCase()) || 
       matchWords(i.name.toLocaleLowerCase(),searchq.toLocaleLowerCase()) || 
       matchWords(i.brand.toLocaleLowerCase(),searchq.toLocaleLowerCase()))
    return true
    return false
}

const matchWords = (s1,s2)=>{
      if(s1 === s2|| s1.includes(s2)|| s2.includes(s1))
        return true 
        return false
    }
const fun = (searchq)=>{
  console.log('ok')
  let res = items.filter(i=>{
    return findMatch(searchq,i)
  }).map(i=>{
    return i.id
  }) 

  return res
}

export default fun